import React from "react";
import { Task } from "./DisciplineTracker";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Clock, Trash2, Calendar } from "lucide-react";
import { format, startOfDay, isSameDay, addDays, addWeeks, addMonths, startOfWeek, endOfWeek } from "date-fns";

interface TaskItemProps {
  task: Task;
  onToggleCompletion: (taskId: string, completed: boolean) => void;
  onDeleteTask: (taskId: string) => void;
}

export const TaskItem = ({ task, onToggleCompletion, onDeleteTask }: TaskItemProps) => {
  const today = startOfDay(new Date());
  const todayString = today.toISOString().split('T')[0];
  
  // Obtenir les dates de début et fin de semaine courante
  const weekStart = startOfWeek(today, { weekStartsOn: 1 }); // Commence lundi
  const weekEnd = endOfWeek(today, { weekStartsOn: 1 });
  
  // Vérifier si l'habitude est due aujourd'hui ou cette semaine
  const isDueToday = () => {
    const startDate = startOfDay(task.recurrence.startDate);
    
    if (isSameDay(startDate, today)) return true;
    
    switch (task.recurrence.frequency) {
      case 'daily':
        return today >= startDate;
      case 'weekly':
        if (task.recurrence.weeklyConfig?.type === 'specific') {
          // Jour spécifique de la semaine
          const specificDay = task.recurrence.weeklyConfig.specificDay;
          return specificDay !== undefined && today.getDay() === specificDay && today >= startDate;
        }
        // Flexible dans la semaine - toujours "due" si pas encore fait cette semaine
        return today >= startDate;
      case 'monthly':
        const monthsDiff = Math.floor((today.getTime() - startDate.getTime()) / (30 * 24 * 60 * 60 * 1000));
        const nextMonthlyDate = addMonths(startDate, monthsDiff);
        return isSameDay(nextMonthlyDate, today) || isSameDay(addMonths(nextMonthlyDate, 1), today);
      default:
        return false;
    }
  };

  // Vérifier si l'habitude a été faite cette semaine (pour les habitudes hebdomadaires flexibles)
  const isCompletedThisWeek = () => {
    if (task.recurrence.frequency !== 'weekly' || task.recurrence.weeklyConfig?.type !== 'flexible') {
      return false;
    }
    
    const weekDates = [];
    for (let d = new Date(weekStart); d <= weekEnd; d.setDate(d.getDate() + 1)) {
      weekDates.push(d.toISOString().split('T')[0]);
    }
    
    return weekDates.some(date => {
      const completion = task.completions.find(c => c.date === date);
      return completion?.completed === true;
    });
  };

  // Obtenir le statut de completion d'aujourd'hui
  const todayCompletion = task.completions.find(c => c.date === todayString);
  const isCompletedToday = todayCompletion?.completed ?? false;
  const hasStatusToday = todayCompletion !== undefined;
  
  // Pour les habitudes hebdomadaires flexibles
  const completedThisWeek = isCompletedThisWeek();

  // Calculer les stats de la semaine dernière
  const getWeeklyStats = () => {
    const last7Days = Array.from({ length: 7 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - i);
      return date.toISOString().split('T')[0];
    });
    
    const completedCount = last7Days.filter(date => {
      const completion = task.completions.find(c => c.date === date);
      return completion?.completed === true;
    }).length;
    
    return { completedCount, totalDays: 7 };
  };

  const weeklyStats = getWeeklyStats();
  
  const getFrequencyDisplay = () => {
    switch (task.recurrence.frequency) {
      case 'daily': 
        return 'Quotidienne';
      case 'weekly':
        if (task.recurrence.weeklyConfig?.type === 'flexible') {
          return 'Cette semaine';
        } else if (task.recurrence.weeklyConfig?.type === 'specific') {
          const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
          const dayName = task.recurrence.weeklyConfig.specificDay !== undefined 
            ? days[task.recurrence.weeklyConfig.specificDay]
            : 'Hebdomadaire';
          return `Chaque ${dayName}`;
        }
        return 'Hebdomadaire';
      case 'monthly': 
        return 'Mensuelle';
      default: 
        return '';
    }
  };

  const getStatusBadge = () => {
    const due = isDueToday();
    
    // Pour les habitudes hebdomadaires flexibles
    if (task.recurrence.frequency === 'weekly' && task.recurrence.weeklyConfig?.type === 'flexible') {
      if (completedThisWeek) {
        return (
          <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 border-emerald-200">
            <CheckCircle className="h-3 w-3 mr-1" />
            Faite cette semaine
          </Badge>
        );
      } else {
        return (
          <Badge variant="outline" className="bg-blue-100 text-blue-700 border-blue-200">
            <Clock className="h-3 w-3 mr-1" />
            À faire cette semaine
          </Badge>
        );
      }
    }

    // Pour les autres types d'habitudes
    if (!due) {
      return (
        <Badge variant="outline" className="bg-gray-100 text-gray-700 border-gray-200">
          <Calendar className="h-3 w-3 mr-1" />
          Pas aujourd'hui
        </Badge>
      );
    }

    if (isCompletedToday) {
      return (
        <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 border-emerald-200">
          <CheckCircle className="h-3 w-3 mr-1" />
          Accomplie
        </Badge>
      );
    }

    if (hasStatusToday && !isCompletedToday) {
      return (
        <Badge variant="destructive" className="bg-red-100 text-red-700 border-red-200">
          <XCircle className="h-3 w-3 mr-1" />
          Ratée
        </Badge>
      );
    }

    return (
      <Badge variant="outline" className="bg-blue-100 text-blue-700 border-blue-200">
        <Clock className="h-3 w-3 mr-1" />
        En attente
      </Badge>
    );
  };

  // Déterminer si on peut agir sur cette habitude
  const canAct = () => {
    if (task.recurrence.frequency === 'weekly' && task.recurrence.weeklyConfig?.type === 'flexible') {
      return !completedThisWeek; // On peut agir si pas encore fait cette semaine
    }
    return isDueToday() && !hasStatusToday; // Logique normale pour les autres
  };

  const canModify = () => {
    if (task.recurrence.frequency === 'weekly' && task.recurrence.weeklyConfig?.type === 'flexible') {
      return completedThisWeek; // On peut modifier si déjà fait cette semaine
    }
    return hasStatusToday; // Logique normale pour les autres
  };

  return (
    <div className={`
      p-4 rounded-lg border transition-all
      ${isCompletedToday || completedThisWeek
        ? 'bg-emerald-50/50 border-emerald-200/50' 
        : hasStatusToday && !isCompletedToday
        ? 'bg-red-50/50 border-red-200/50'
        : 'bg-background border-border hover:shadow-sm'
      }
    `}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <h3 className={`font-medium truncate ${
              isCompletedToday || completedThisWeek ? 'text-emerald-700' : 'text-foreground'
            }`}>
              {task.title}
            </h3>
            {getStatusBadge()}
          </div>
          
          {task.description && (
            <p className="text-sm text-muted-foreground mb-2">
              {task.description}
            </p>
          )}
          
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>{getFrequencyDisplay()}</span>
            <span>Depuis le {format(task.recurrence.startDate, 'dd/MM/yyyy')}</span>
            <span>{weeklyStats.completedCount}/{weeklyStats.totalDays} cette semaine</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 flex-shrink-0">
          {canAct() && (
            <>
              <Button
                size="sm"
                variant="outline"
                onClick={() => onToggleCompletion(task.id, true)}
                className="h-8 px-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border-emerald-200"
              >
                <CheckCircle className="h-4 w-4 mr-1" />
                Fait
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => onToggleCompletion(task.id, false)}
                className="h-8 px-3 bg-red-50 hover:bg-red-100 text-red-700 border-red-200"
              >
                <XCircle className="h-4 w-4 mr-1" />
                Raté
              </Button>
            </>
          )}
          
          {canModify() && (
            <Button
              size="sm"
              variant="outline"
              onClick={() => onToggleCompletion(task.id, !(isCompletedToday || completedThisWeek))}
              className="h-8 px-3"
            >
              Modifier
            </Button>
          )}
          
          <Button
            size="sm"
            variant="ghost"
            onClick={() => onDeleteTask(task.id)}
            className="h-8 w-8 p-0 text-muted-foreground hover:text-destructive"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};