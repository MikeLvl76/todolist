import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'item-container',
  template: `<div id="item-container">
    <div id="header">
      <p id="title">{{ title() }}</p>
      <p id="priority">{{ priority() }}</p>
    </div>
    <p id="description">{{ description() }}</p>
    <p id="deadline">{{ deadline() }}</p>
  </div>`,
  styles: `
  #item-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: 50%;
    max-height: 20%;
    border: 2px solid black;
    padding: 4px;
  }

  #header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-height: 15%;
    padding: 2px;
    border: 2px solid black;
  }

  #title {
    font-weight: bold;
    font-size: 24px;
    text-align: left;
  }

  #priority {
    
  }

  #description {
    word-break: break-word;
    min-height: 40%;
    max-height: 70%;
    border: 2px solid black;
  }

  #deadline {
    place-self: flex-end;
    border: 2px solid black;
  }
  `,
})
export class Item {
  description = input('');
  priority = input('normal');
  title = input();
  deadline = input<Date>();
}
