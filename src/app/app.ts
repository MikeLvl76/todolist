import { Component, signal } from '@angular/core';
import { TodoItem } from '../utils/types';

@Component({
  selector: 'app-root',
  template: `<main>
    <div>
      <h1>Your todolist</h1>
      <ul>
        @for (item of list; track item.id) {
        <li>
          <div>
            <p>{{ item.title }}</p>
            <p>{{ item.description }}</p>
            <p>{{ item.priority }}</p>
            <p>{{ item.deadline }}</p>
            <button (click)="deleteItem(item.id)">Remove</button>
          </div>
        </li>
        }
      </ul>
      <button (click)="addItem()">Add new item</button>
    </div>
  </main>`,
  styleUrl: './app.css',
})
export class App {
  protected list: TodoItem[] = [
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
