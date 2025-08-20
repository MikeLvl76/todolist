import { Component, signal } from '@angular/core';
import { TodoItem } from '../utils/types';
import { Item } from '../components/item';
import { LucideAngularModule, Trash2Icon, PlusIcon } from 'lucide-angular';

@Component({
  imports: [LucideAngularModule, Item],
  selector: 'app-root',
  templateUrl: '../templates/app.template.html',
  styleUrl: '../styles.css',
})
export class App {
  readonly Trash2Icon = Trash2Icon;
  readonly PlusIcon = PlusIcon;
  protected list: TodoItem[] = [
    // Test for display
    {
      id: Math.random().toString(16).substring(2),
      title: 'Title',
      description: 'This is a description',
      priority: 'low',
      deadline: new Date(),
    },
  ];

  addItem() {
    alert('TODO: add new item');
  }

  deleteItem(id: string) {
    alert(`TODO: remove item ${id}`);
  }
}
