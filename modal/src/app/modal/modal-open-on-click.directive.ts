import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { ModalService } from './modal.service';

@Directive({
  selector: '[modalOpenOnClick]',
})
export class ModalOpenOnClickDirective implements OnInit, OnDestroy {
  elements!: HTMLButtonElement[];
  
  constructor(
    private modalService: ModalService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  
  ) {}


  ngOnDestroy(): void {
    this.elements.forEach(el => el.removeEventListener('click', this.clickHandlerForClose));
  }
  ngOnInit() {
    this.modalService.close$.subscribe(() => this.viewContainer.clear());
  }

  @Input()
  set modalOpenOnClick(els: HTMLButtonElement[]) {
    this.elements = els;
    this.elements.forEach((el) => {
      el.addEventListener('click',this.clickHandlerForClose);
    });
  }
  clickHandlerForClose = (() => {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.templateRef);
  }).bind(this);
  
}

