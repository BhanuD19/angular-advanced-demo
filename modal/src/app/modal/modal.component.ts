import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input()
  body!: TemplateRef<any>;

  @Input()
  hideOnEsc = true;

  @Input()
  hideOnClickOutside = true;

  @Input()
  context: any;
  
  constructor(private modalService: ModalService,
    private eventMgr: EventManager) {}

  ngOnInit() {
    this.eventMgr.addGlobalEventListener("window", 'keyup.esc', () => {
      if(this.hideOnEsc)
      this.closeModal();
    });
  }

  onClickOutsideModal() {
    if(this.hideOnClickOutside) {
      this.closeModal();
    }
  }

  closeModal() {
    this.modalService.close();
  }

  cancelClick(evt: MouseEvent) {
    evt.preventDefault();
    evt.stopPropagation();
  }
}
