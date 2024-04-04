import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { ToolbarComponent } from './toolbar.component';



@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ToolbarComponent]

})
export class ToolbarModule { }
