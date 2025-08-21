import { Component, inject, signal, ViewChild } from '@angular/core';
import { TodoItem } from '../utils/types';
import { Item } from '../components/item';
import { LucideAngularModule, Trash2Icon, PlusIcon } from 'lucide-angular';
import { LocalStorageService } from '../services/local-storage';
import { Dialog } from '../components/dialog';
import { TodoForm } from '../components/todo-form';

@Component({
  imports: [LucideAngularModule, Item, Dialog, TodoForm],
  selector: 'app-root',
  templateUrl: '../templates/app.template.html',
  styleUrl: '../styles.css',
})
export class App {
  readonly localStorageService: LocalStorageService<TodoItem> = inject(LocalStorageService);
  readonly Trash2Icon = Trash2Icon;
  readonly PlusIcon = PlusIcon;
  readonly list: TodoItem[] = [];
  @ViewChild('dlg') readonly dialog!: Dialog;

  constructor() {
    const data = this.localStorageService.getAllData();
    this.list.push(...data);
  }

  deleteItem(id: string) {
    this.localStorageService.removeData(id);
  }

  openDialog() {
    this.dialog.open();
  }
}
