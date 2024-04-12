import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'index.html', pathMatch: 'full'},
  { path: 'index.html', component: HomeComponent },
  { path: 'students', loadChildren: () => import('./features/students/students.module').then(m => m.StudentsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
