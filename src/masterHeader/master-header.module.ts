import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MasterHeaderComponent } from './master-header.component';
import { MatMenuModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [
    MasterHeaderComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatMenuModule,
    MatIconModule,
  ],
  exports: [
    MasterHeaderComponent
  ]
})
export class MasterHeaderModule { }
