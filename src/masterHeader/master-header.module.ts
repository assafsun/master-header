import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterHeaderComponent } from './master-header.component';

@NgModule({
  declarations: [
    MasterHeaderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MasterHeaderComponent
  ]
})
export class MasterHeaderModule { }
