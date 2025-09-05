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
  deadline: Date;
  completed?: boolean;
  createdAt: Date;
}

export const DisciplineTracker = () => {
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
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed } : task
    ));
  };

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <Card className="bg-background border border-border/50">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-lg font-semibold">Discipline Tracker</CardTitle>
        <Button 
          onClick={() => setIsFormOpen(true)} 
          size="sm" 
          className="flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          Ajouter une tâche
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