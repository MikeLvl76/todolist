import { Component, input } from '@angular/core';
import { LucideAngularModule, TriangleAlertIcon } from 'lucide-angular';
import { TodoItem } from '../utils/types';

@Component({
  imports: [LucideAngularModule],
  selector: 'todo-item',
  templateUrl: `../templates/item.template.html`,
  styleUrl: '../styles.css',
})
export class Item {
  readonly TriangleAlertIcon = TriangleAlertIcon;
  description = input('');
  priority = input<TodoItem['priority']>('Normal');
  title = input();
  deadline = input<TodoItem['deadline']>();

  formatDate(date?: Date) {
    if (!date) return 'Unknown date';
    return date.toLocaleString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  }

  getPriorityColor(priority?: TodoItem['priority']) {
    if (priority) {
      if (priority == 'Low') return '#70a250';
      if (priority == 'Normal') return '#f2dd50';
      if (priority == 'High') return '#ed2015';
    }
    return '#000000';
  }
}
