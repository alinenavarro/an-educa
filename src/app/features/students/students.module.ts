import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsComponent } from './students.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsFormComponent } from './students-form/students-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StudentsComponent,
    StudentsFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StudentsRoutingModule,
    ReactiveFormsModule
  ]
})
export class StudentsModule { }
