import { Component, OnInit } from '@angular/core';

import { PoBreadcrumb, PoNotificationService, PoPageAction, PoTableColumn } from '@po-ui/ng-components';
import { Students } from './shared/interfaces/students.model';
import { StudentsService } from './shared/services/students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  pageActions: Array<PoPageAction> = [
    { label: 'Incluir', action: this.goToStudentsForm.bind(this) }
  ];

  breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Alunos', link: '' }
    ]
  };

  tableColumns: Array<PoTableColumn> = [];

  students: Students = {
    items: [],
    hasNext: false,
    remainingRecords: 0
  }

  isLoading = false;
  hasNextPage = false;
  page = 1;
  pageSize = 10;

  constructor(
    private studentsService: StudentsService,
    private poNotificationService: PoNotificationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.setTableColumns();
    this.getStudents(this.page,this.pageSize);

  }

  goToStudentsForm(): void {
    this.router.navigate(['students/new']);
  }

  setTableColumns(): void {
    this.tableColumns = [
      { property: 'id', label: 'ID' },
      { property: 'name', label: 'Nome' },
      { property: 'cpf', label: 'CPF' },
      { property: 'grade', label: 'Curso' },
      { property: 'email', label: 'E-mail' },
      { property: 'phone', label: 'Telefone' }

    ]
  }

  getStudents(page: number, pageSize: number): void {
    
    this.isLoading = true;
    this.studentsService.get(page, pageSize).subscribe({
        next: (students: Students) => this.onGetSucess(students) ,
        error: (error: any) => { this.poNotificationService.error("Falha no retorno dos dados de alunos"); this.isLoading = false;}
    });
  }

  onGetSucess(students: Students): void {
    if (this.students.items.length === 0) {
      this.students.items = students.items;
    } else {
      this.students.items = this.students.items.concat(students.items);
    }

    this.isLoading = false;
    this.hasNextPage = students.hasNext;
  }

  showMoreStudents() {
    this.page ++;
    this.getStudents(this.page, this.pageSize);
  }


}
