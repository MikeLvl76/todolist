import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService<T extends { id: string; [key: string]: unknown }> {
  constructor() {}

  getAllData() {
    const data = localStorage.getItem('data');
    if (!data) return [] as T[];

    return JSON.parse(JSON.parse(data)) as T[];
  }

  saveData(data: T) {
    const savedData = this.getAllData();
    savedData.push(data);
    localStorage.setItem('data', JSON.stringify(savedData));
  }

  removeData(id: string) {
    const savedData = this.getAllData();
    localStorage.setItem('data', JSON.stringify(savedData.filter((item) => item.id !== id)));
  }

  clear() {
    localStorage.clear();
  }

  size() {
    return localStorage.length;
  }
}
