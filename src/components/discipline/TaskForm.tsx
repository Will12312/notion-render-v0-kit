import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Task } from "./DisciplineTracker";

const taskSchema = z.object({
  title: z.string().min(1, "Le titre est requis").max(100, "Le titre est trop long"),
  description: z.string().optional(),
  frequency: z.enum(['daily', 'weekly', 'monthly'], {
    required_error: "La fréquence est requise",
  }),
  startDate: z.date({
    required_error: "Une date de début est requise",
  }),
});

type TaskFormData = z.infer<typeof taskSchema>;

interface TaskFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Omit<Task, "id" | "createdAt">) => void;
}

export const TaskForm = ({ isOpen, onClose, onSubmit }: TaskFormProps) => {
  const form = useForm<TaskFormData>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const handleSubmit = (data: TaskFormData) => {
    onSubmit({
      title: data.title,
      description: data.description,
      recurrence: {
        frequency: data.frequency,
        startDate: data.startDate,
      },
      completions: [],
    });
    form.reset();
  };

  const handleClose = () => {
    form.reset();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Ajouter une nouvelle habitude</DialogTitle>
          <DialogDescription>
            Créez une habitude récurrente pour améliorer votre discipline.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Titre de l'habitude</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Faire du sport" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description (optionnelle)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Détails sur l'habitude..."
                      className="min-h-[80px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="frequency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fréquence</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Sélectionner une fréquence</option>
                      <option value="daily">Tous les jours</option>
                      <option value="weekly">Toutes les semaines</option>
                      <option value="monthly">Tous les mois</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="startDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date de début</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "dd/MM/yyyy")
                          ) : (
                            <span>Sélectionner une date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex gap-3 pt-4">
              <Button type="button" variant="outline" onClick={handleClose} className="flex-1">
                Annuler
              </Button>
              <Button type="submit" className="flex-1">
                Ajouter
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};