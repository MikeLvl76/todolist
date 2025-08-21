import { Component, inject } from '@angular/core';
import { TodoItem } from '../utils/types';
import { Item } from '../components/item';
import { LucideAngularModule, Trash2Icon, PlusIcon } from 'lucide-angular';
import { LocalStorageService } from '../services/local-storage';
import { Dialog } from '../components/dialog';
import { TodoForm } from '../components/todo-form';
import { DialogService } from '../services/dialog';

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
  readonly list: TodoItem[] = this.localStorageService.getAllData();
  private readonly dialogService: DialogService = inject(DialogService);

  openDialog() {
    this.dialogService.open();
  }
}
