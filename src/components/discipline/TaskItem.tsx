import React from "react";
import { Task } from "./DisciplineTracker";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Clock, Trash2 } from "lucide-react";
import { differenceInDays, format, isAfter, startOfDay } from "date-fns";

interface TaskItemProps {
  task: Task;
  onToggleCompletion: (taskId: string, completed: boolean) => void;
  onDeleteTask: (taskId: string) => void;
}

export const TaskItem = ({ task, onToggleCompletion, onDeleteTask }: TaskItemProps) => {
  const today = startOfDay(new Date());
  const deadlineDate = startOfDay(task.deadline);
  const daysRemaining = differenceInDays(deadlineDate, today);
  const isOverdue = isAfter(today, deadlineDate);
  const isDueToday = daysRemaining === 0;
  const isDeadlineReached = isDueToday || isOverdue;

  const getTimeStatus = () => {
    if (task.completed) {
      return (
        <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 border-emerald-200">
          <CheckCircle className="h-3 w-3 mr-1" />
          Terminée
        </Badge>
      );
    }

    if (isOverdue) {
      return (
        <Badge variant="destructive" className="bg-red-100 text-red-700 border-red-200">
          <Clock className="h-3 w-3 mr-1" />
          En retard de {Math.abs(daysRemaining)} jour{Math.abs(daysRemaining) > 1 ? 's' : ''}
        </Badge>
      );
    }

    if (isDueToday) {
      return (
        <Badge variant="outline" className="bg-orange-100 text-orange-700 border-orange-200">
          <Clock className="h-3 w-3 mr-1" />
          Aujourd'hui
        </Badge>
      );
    }

    return (
      <Badge variant="outline" className="bg-blue-100 text-blue-700 border-blue-200">
        <Clock className="h-3 w-3 mr-1" />
        {daysRemaining} jour{daysRemaining > 1 ? 's' : ''}
      </Badge>
    );
  };

  return (
    <div className={`
      p-4 rounded-lg border transition-all
      ${task.completed 
        ? 'bg-muted/50 border-border/30 opacity-75' 
        : 'bg-background border-border hover:shadow-sm'
      }
    `}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <h3 className={`font-medium truncate ${
              task.completed ? 'line-through text-muted-foreground' : 'text-foreground'
            }`}>
              {task.title}
            </h3>
            {getTimeStatus()}
          </div>
          
          {task.description && (
            <p className={`text-sm mb-2 ${
              task.completed ? 'text-muted-foreground' : 'text-muted-foreground'
            }`}>
              {task.description}
            </p>
          )}
          
          <p className="text-xs text-muted-foreground">
            Échéance : {format(task.deadline, 'dd/MM/yyyy')}
          </p>
        </div>
        
        <div className="flex items-center gap-2 flex-shrink-0">
          {isDeadlineReached && !task.completed && (
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
          
          {task.completed && (
            <Button
              size="sm"
              variant="outline"
              onClick={() => onToggleCompletion(task.id, false)}
              className="h-8 px-3"
            >
              Rouvrir
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