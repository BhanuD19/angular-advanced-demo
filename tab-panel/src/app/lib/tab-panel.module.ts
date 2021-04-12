import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabContainerComponent } from './tab-container/tab-container.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';


@NgModule({
    declarations: [TabContainerComponent, TabPanelComponent],
    imports: [
        CommonModule,
    ],
    exports: [TabContainerComponent, TabPanelComponent]
})
export class TabPanelModule { }

