import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";

export interface Task {
  id: string;
  title: string;
  description?: string;
  recurrence: {
    frequency: 'daily' | 'weekly' | 'monthly';
    startDate: Date;
    weeklyConfig?: {
      type: 'flexible' | 'specific'; // flexible = n'importe quand dans la semaine
      specificDay?: 0 | 1 | 2 | 3 | 4 | 5 | 6; // 0 = dimanche, 1 = lundi, etc.
    };
  };
  completions: { date: string; completed: boolean }[]; // format: YYYY-MM-DD
  createdAt: Date;
}

export const DisciplineTracker = () => {
  console.log("DisciplineTracker: Component is rendering");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const addTask = (taskData: Omit<Task, "id" | "createdAt">) => {
    const newTask: Task = {
      ...taskData,
      id: crypto.randomUUID(),
      createdAt: new Date(),
    };
    setTasks([...tasks, newTask]);
    setIsFormOpen(false);
  };

  const toggleTaskCompletion = (taskId: string, completed: boolean) => {
    const today = new Date().toISOString().split('T')[0]; // Format YYYY-MM-DD
    
    setTasks(tasks.map(task => {
      if (task.id !== taskId) return task;
      
      const existingCompletion = task.completions.find(c => c.date === today);
      const updatedCompletions = existingCompletion
        ? task.completions.map(c => c.date === today ? { ...c, completed } : c)
        : [...task.completions, { date: today, completed }];
        
      return { ...task, completions: updatedCompletions };
    }));
  };

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <Card className="bg-background border border-border/50">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-lg font-semibold">🎯 Mes Habitudes</CardTitle>
        <Button 
          onClick={() => {
            console.log("Button clicked, opening form");
            setIsFormOpen(true);
          }} 
          size="sm" 
          className="flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          Ajouter une habitude
        </Button>
      </CardHeader>
      <CardContent>
        <TaskList 
          tasks={tasks}
          onToggleCompletion={toggleTaskCompletion}
          onDeleteTask={deleteTask}
        />
        <TaskForm 
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          onSubmit={addTask}
        />
      </CardContent>
    </Card>
  );
};