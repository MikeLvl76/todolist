import { Component, ElementRef, input, ViewChild } from '@angular/core';
import { LucideAngularModule, XIcon } from 'lucide-angular';

@Component({
  imports: [LucideAngularModule],
  selector: 'custom-dialog',
  templateUrl: `../templates/dialog.template.html`,
  styleUrl: '../styles.css',
})
export class Dialog {
  @ViewChild('dialogRef') dialogElement!: ElementRef<HTMLDialogElement>;

  readonly XIcon = XIcon;

  open() {
    const dialog = this.dialogElement.nativeElement;
    if (!dialog.open) {
      dialog.showModal();
    }
  }

  close() {
    const dialog = this.dialogElement.nativeElement;
    if (dialog.open) {
      dialog.close();
    }
  }
}
