import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentsComponent } from './students.component';
import { StudentsFormComponent } from './students-form/students-form.component';

const routes: Routes = [
  { path: '', component: StudentsComponent },
  { path: 'new', component: StudentsFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
