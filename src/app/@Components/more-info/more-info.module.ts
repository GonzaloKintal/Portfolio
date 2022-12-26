import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoreInfoComponent } from './more-info.component';



@NgModule({
  declarations: [
    MoreInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [MoreInfoComponent]
})
export class MoreInfoModule { }
