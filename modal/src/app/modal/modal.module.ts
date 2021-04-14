import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ModalOpenOnClickDirective } from './modal-open-on-click.directive';
import { ModalService } from './modal.service';




@NgModule({
  declarations: [ModalComponent, ModalOpenOnClickDirective],
  imports: [
    CommonModule
  ],
  exports: [ModalComponent, ModalOpenOnClickDirective]
})
export class ModalModule {
  static  forRoot(): ModuleWithProviders<ModalModule> {
    return {
      ngModule: ModalModule,
      providers: [ModalService]
    }
  }
 }
