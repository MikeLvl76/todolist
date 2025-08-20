import { Component, input } from '@angular/core';
import { LucideAngularModule, TriangleAlertIcon } from 'lucide-angular';
import { TodoItem } from '../utils/types';

@Component({
  imports: [LucideAngularModule],
  selector: 'item-container',
  templateUrl: `../templates/item.template.html`,
  styleUrl: '../styles.css',
})
export class Item {
  readonly TriangleAlertIcon = TriangleAlertIcon;
  description = input('');
  priority = input<TodoItem['priority']>('normal');
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
      if (priority == 'low') return '#70a250';
      if (priority == 'normal') return '#f2dd50';
      if (priority == 'high') return '#ed2015';
    }
    return '#000000';
  }
}
