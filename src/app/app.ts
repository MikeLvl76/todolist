import { Component, inject, signal } from '@angular/core';
import { TodoItem } from '../utils/types';
import { Item } from '../components/item';
import { LucideAngularModule, Trash2Icon, PlusIcon } from 'lucide-angular';
import { LocalStorageService } from '../services/local-storage';

@Component({
  imports: [LucideAngularModule, Item],
  selector: 'app-root',
  templateUrl: '../templates/app.template.html',
  styleUrl: '../styles.css',
})
export class App {
  readonly localStorageService: LocalStorageService<TodoItem> = inject(LocalStorageService);
  readonly Trash2Icon = Trash2Icon;
  readonly PlusIcon = PlusIcon;
  readonly list: TodoItem[] = [];

  constructor() {
    const data = this.localStorageService.getAllData();
    this.list.push(...data);
  }

  addItem() {
    alert('TODO: add new item');
  }

  deleteItem(id: string) {
    this.localStorageService.removeData(id);
  }
}
