import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from '../services/local-storage';
import { TodoItem } from '../utils/types';
import { DialogService } from '../services/dialog';

@Component({
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true,
  selector: 'custom-form',
  templateUrl: '../templates/todo-form.template.html',
})
export class TodoForm {
  readonly localStorageService: LocalStorageService<TodoItem> = inject(LocalStorageService);
  private readonly dialogService: DialogService = inject(DialogService);
  readonly priorities = ['Low', 'Normal', 'High'];

  readonly form = new FormBuilder().group({
    title: new FormControl<string>('', { nonNullable: true }),
    priority: [this.priorities[1], Validators.required],
    description: new FormControl<string>('', { nonNullable: true }),
    deadline: new FormControl<Date>(new Date(), { nonNullable: true }),
  });

  handleSubmit(values: typeof this.form.value) {
    const id = Math.random().toString(16).substring(2);
    this.localStorageService.saveData({ id, ...values } as Required<TodoItem> satisfies TodoItem);
    this.dialogService.close();
  }
}
