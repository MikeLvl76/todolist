import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoItem } from '../utils/types';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService<T extends TodoItem> {
  private readonly _data = new BehaviorSubject<T[]>(this.getAllData());
  data$ = this._data.asObservable();

  getAllData() {
    return JSON.parse(localStorage.getItem('data') || '[]') as T[];
  }

  private save(data: T[]) {
    localStorage.setItem('data', JSON.stringify(data));
    this._data.next(data);
  }

  addItem(item: T) {
    const current = this.getAllData();
    this.save([...current, item]);
  }

  removeItem(id: string) {
    const current = this.getAllData();
    this.save(current.filter((item: T) => item.id !== id));
  }

  size() {
    return this._data.value.length;
  }

  clear() {
    this.save([]);
  }
}
