import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { FaInputModule} from 'fa-input';
import { AppComponent } from './app.component';
import { TabPanelModule} from 'tab-panel';

import { ModalModule } from './modal/modal.module';
// import {TabPanelModule} from 'tab-panel';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FaInputModule,
    TabPanelModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
