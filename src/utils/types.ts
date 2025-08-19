export type TodoItem = {
  id: string;
  description: string;
  priority: 'low' | 'normal' | 'high';
  title?: string;
  deadline?: Date;
};
