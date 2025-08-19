import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'item-container',
  templateUrl: `../templates/item.template.html`,
  styleUrl: '../styles.css'
})
export class Item {
  description = input('');
  priority = input('normal');
  title = input();
  deadline = input<Date>();
}
