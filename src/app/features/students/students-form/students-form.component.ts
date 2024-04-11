import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { PoBreadcrumb } from '@po-ui/ng-components';
import { StudentForm } from '../shared/interfaces/student-form.model';

@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrls: ['./students-form.component.css']
})
export class StudentsFormComponent implements OnInit {

  studentForm: FormGroup = new FormGroup<StudentForm>({
    id: new FormControl('', { nonNullable: true }),
    name: new FormControl('', { nonNullable: true }),
    cpf: new FormControl('', { nonNullable: true }),
    grade: new FormControl('', { nonNullable: true }),
    email: new FormControl('', { nonNullable: true }),
    phone: new FormControl('', { nonNullable: true })
  });

  breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Alunos', link: '/students' },
      { label: 'Novo Registro', link: '' }
    ]
  };
  
  constructor(){}

  ngOnInit(): void {
    // this.studentForm.valueChanges.subscribe({
    //   next: (res: any) => console.log(res)
    // })
  }


}
