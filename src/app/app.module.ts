import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MasterHeaderModule } from '../masterHeader/master-header.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MasterHeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
