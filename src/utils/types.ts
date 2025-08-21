export type TodoItem = {
  id: string;
  description: string;
  priority: 'Low' | 'Normal' | 'High';
  title: string;
  deadline: Date;
};
