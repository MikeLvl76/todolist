import { Component, inject } from '@angular/core';
import { TodoItem } from '../utils/types';
import { Item } from './item.component';
import { LucideAngularModule, Trash2Icon, PlusIcon } from 'lucide-angular';
import { LocalStorageService } from '../services/local-storage.service';
import { Dialog } from './dialog.component';
import { TodoForm } from './todo-form.component';
import { DialogService } from '../services/dialog.service';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule, LucideAngularModule, Item, Dialog, TodoForm],
  selector: 'app-root',
  templateUrl: '../templates/app.template.html',
  styleUrl: '../styles.css',
})
export class App {
  readonly localStorageService: LocalStorageService<TodoItem> = inject(LocalStorageService);
  readonly Trash2Icon = Trash2Icon;
  readonly PlusIcon = PlusIcon;
  readonly list$ = this.localStorageService.data$;
  private readonly dialogService: DialogService = inject(DialogService);

  openDialog() {
    this.dialogService.open();
  }

  clear() {
    return this.localStorageService.clear();
  }

  size() {
    return this.localStorageService.size();
  }
}
