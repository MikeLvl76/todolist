import { Component, inject, input } from '@angular/core';
import {
  LucideAngularModule,
  TriangleAlertIcon,
  Trash2Icon,
  CalendarClockIcon,
} from 'lucide-angular';
import { TodoItem } from '../utils/types';
import { LocalStorageService } from '../services/local-storage';

@Component({
  imports: [LucideAngularModule],
  selector: 'todo-item',
  templateUrl: `../templates/item.template.html`,
  styleUrl: '../styles.css',
})
export class Item {
  readonly localStorageService: LocalStorageService<TodoItem> = inject(LocalStorageService);
  readonly Trash2Icon = Trash2Icon;
  readonly TriangleAlertIcon = TriangleAlertIcon;
  readonly CalendarClockIcon = CalendarClockIcon;

  id = input('');
  description = input('');
  priority = input<TodoItem['priority']>('Normal');
  title = input(`Title ${this.localStorageService.size() + 1}`);
  deadline = input<TodoItem['deadline']>(new Date());

  formatDate(date: Date) {
    const newDate = new Date(date);
    const day = newDate.getDay().toString().padStart(2, '0');
    const month = newDate.getMonth().toString().padStart(2, '0');
    const year = newDate.getFullYear().toString();

    return `${day}/${month}/${year}`;
  }

  getPriorityColor(priority?: TodoItem['priority']) {
    if (priority) {
      if (priority == 'Low') return '#70a250';
      if (priority == 'Normal') return '#f2dd50';
      if (priority == 'High') return '#ed2015';
    }
    return '#000000';
  }

  delete(id: string) {
    this.localStorageService.removeItem(id);
  }
}
