import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { PoBreadcrumb, PoNotificationService, PoPageEditLiterals } from '@po-ui/ng-components';
import { StudentForm } from '../shared/interfaces/student-form.model';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../shared/services/students.service';
import { Student } from '../shared/interfaces/student.model';

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
  
  isLoading: boolean = false;
  disableButton: boolean = false;
  operation: string = 'post';
  titleForm: string = 'Novo Registro';
  customLiteralsButtons: PoPageEditLiterals = {
    saveNew: 'Salvar e Novo'
  };
  studentId: string = '';

  constructor(
    private router: Router,
    private studentsService: StudentsService,
    private poNotificationService: PoNotificationService,
    private activatedRoute: ActivatedRoute
  ){ }

  ngOnInit(): void {
    this.setOperationForm();
    this.setTitlesForm();
    this.operation == 'put' ? this.getStudentById() : '';
  }

  setOperationForm(): void {
    this.studentId = this.activatedRoute.snapshot.params['id']
    this.operation = this.studentId ? 'put' : 'post';
  }

  setTitlesForm(): void {
    if(this.operation === 'put') {
      this.titleForm = 'Editar Registro';
      this.customLiteralsButtons.saveNew = 'Excluir';
    } 
    this.breadcrumb.items[2].label = this.titleForm;
  }

  cancel(): void {
    this.router.navigate(['students']);
  }

  saveForm(saveAndNew: boolean ): void {
    this.isLoading = true;
    this.disableButton = true;
    this.studentsService.post(this.studentForm.value).subscribe({
      next: response => this.onSaveSuccess(response, saveAndNew),
      error: error => this.onSaveError(error)
    });
 
  }

  onSaveSuccess(response: Student, saveAndNew:boolean ): void {
    this.isLoading = false;
    this.disableButton = false;
    this.poNotificationService.success(`Registro incluído com Sucesso! ID ${response.id}`);
    saveAndNew ? this.studentForm.reset() : this.router.navigate(['students']);

  }

  onSaveError(error: any): void {
    this.isLoading = false;
    this.disableButton = false;
    this.poNotificationService.error('Erro ao tentar incluir registro.');

  }

  getStudentById(): void {
    this.isLoading = true;
    this.studentsService.getById(this.studentId).subscribe({
      next: (student: Student) => this.successGetById(student),
      error: (error: any) => this.errorGetById(error)
    }); 
  }

  successGetById(student: Student): void {
    this.isLoading = false;
    this.studentForm = new FormGroup<StudentForm>({
      id: new FormControl(student.id, { nonNullable: true }),
      name: new FormControl(student.name, { nonNullable: true }),
      cpf: new FormControl(student.cpf, { nonNullable: true }),
      email: new FormControl(student.email, { nonNullable: true }),
      phone: new FormControl(student.phone, { nonNullable: true }),
      grade: new FormControl(student.grade, { nonNullable: true })
    });
  }

  errorGetById(error: any): void {
    this.isLoading = false;
    this.poNotificationService.error('Falha ao retornar registro.');
  }

}
