import React from "react";
import { Task } from "./DisciplineTracker";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Clock, Trash2, Calendar } from "lucide-react";
import { format, startOfDay, isSameDay, addDays, addWeeks, addMonths } from "date-fns";

interface TaskItemProps {
  task: Task;
  onToggleCompletion: (taskId: string, completed: boolean) => void;
  onDeleteTask: (taskId: string) => void;
}

export const TaskItem = ({ task, onToggleCompletion, onDeleteTask }: TaskItemProps) => {
  const today = startOfDay(new Date());
  const todayString = today.toISOString().split('T')[0];
  
  // Vérifier si l'habitude est due aujourd'hui
  const isDueToday = () => {
    const startDate = startOfDay(task.recurrence.startDate);
    
    if (isSameDay(startDate, today)) return true;
    
    switch (task.recurrence.frequency) {
      case 'daily':
        return today >= startDate;
      case 'weekly':
        const weeksDiff = Math.floor((today.getTime() - startDate.getTime()) / (7 * 24 * 60 * 60 * 1000));
        const nextWeeklyDate = addWeeks(startDate, weeksDiff);
        return isSameDay(nextWeeklyDate, today) || isSameDay(addWeeks(nextWeeklyDate, 1), today);
      case 'monthly':
        const monthsDiff = Math.floor((today.getTime() - startDate.getTime()) / (30 * 24 * 60 * 60 * 1000));
        const nextMonthlyDate = addMonths(startDate, monthsDiff);
        return isSameDay(nextMonthlyDate, today) || isSameDay(addMonths(nextMonthlyDate, 1), today);
      default:
        return false;
    }
  };

  // Obtenir le statut de completion d'aujourd'hui
  const todayCompletion = task.completions.find(c => c.date === todayString);
  const isCompletedToday = todayCompletion?.completed ?? false;
  const hasStatusToday = todayCompletion !== undefined;

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
      case 'daily': return 'Quotidienne';
      case 'weekly': return 'Hebdomadaire';
      case 'monthly': return 'Mensuelle';
      default: return '';
    }
  };

  const getStatusBadge = () => {
    if (!isDueToday()) {
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

  return (
    <div className={`
      p-4 rounded-lg border transition-all
      ${isCompletedToday 
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
              isCompletedToday ? 'text-emerald-700' : 'text-foreground'
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
          {isDueToday() && !hasStatusToday && (
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
          
          {hasStatusToday && (
            <Button
              size="sm"
              variant="outline"
              onClick={() => onToggleCompletion(task.id, !isCompletedToday)}
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