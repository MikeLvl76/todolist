import { Component, ElementRef, inject, input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { LucideAngularModule, XIcon } from 'lucide-angular';
import { Subscription } from 'rxjs';
import { DialogService } from '../services/dialog.service';

@Component({
  imports: [LucideAngularModule],
  selector: 'custom-dialog',
  templateUrl: `../templates/dialog.template.html`,
  styleUrl: '../styles.css',
})
export class Dialog implements OnInit, OnDestroy {
  @ViewChild('dialogRef') dialogElement!: ElementRef<HTMLDialogElement>;
  private readonly dialogService: DialogService = inject(DialogService);
  private sub!: Subscription;

  readonly XIcon = XIcon;

  ngOnInit() {
    this.sub = this.dialogService.isOpen$.subscribe((isOpen) => {
      const dialog = this.dialogElement.nativeElement;
      if (isOpen && !dialog.open) {
        dialog.showModal();
      } else if (!isOpen && dialog.open) {
        dialog.close();
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  close() {
    this.dialogService.close();
  }
}
