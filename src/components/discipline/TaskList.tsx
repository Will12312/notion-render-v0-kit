import React from "react";
import { Task } from "./DisciplineTracker";
import { TaskItem } from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  onToggleCompletion: (taskId: string, completed: boolean) => void;
  onDeleteTask: (taskId: string) => void;
}

export const TaskList = ({ tasks, onToggleCompletion, onDeleteTask }: TaskListProps) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        <p>Aucune habitude ajoutée pour le moment.</p>
        <p className="text-sm mt-1">Commencez par ajouter votre première habitude !</p>
      </div>
    );
  }

  // Trier les habitudes : celles dues aujourd'hui en premier, puis par date de création
  const sortedTasks = [...tasks].sort((a, b) => {
    const today = new Date().toISOString().split('T')[0];
    
    const aHasStatusToday = a.completions.some(c => c.date === today);
    const bHasStatusToday = b.completions.some(c => c.date === today);
    
    const aCompletedToday = a.completions.find(c => c.date === today)?.completed ?? false;
    const bCompletedToday = b.completions.find(c => c.date === today)?.completed ?? false;
    
    // Prioriser les habitudes non traitées aujourd'hui
    if (!aHasStatusToday && bHasStatusToday) return -1;
    if (aHasStatusToday && !bHasStatusToday) return 1;
    
    // Puis celles ratées
    if (aHasStatusToday && bHasStatusToday) {
      if (!aCompletedToday && bCompletedToday) return -1;
      if (aCompletedToday && !bCompletedToday) return 1;
    }
    
    // Enfin par date de création (plus récentes en premier)
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  return (
    <div className="space-y-3">
      {sortedTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleCompletion={onToggleCompletion}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
};