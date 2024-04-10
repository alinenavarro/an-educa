import { Component, OnInit } from '@angular/core';

import { PoBreadcrumb, PoNotificationService, PoPageAction, PoTableColumn } from '@po-ui/ng-components';
import { Students } from './shared/interfaces/students.model';
import { StudentsService } from './shared/services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  pageActions: Array<PoPageAction> = [
    { label: 'Incluir' }
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

  constructor(
    private studentsService: StudentsService,
    private poNotificationService: PoNotificationService
  ) { }

  ngOnInit(): void {
    this.setTableColumns();
    this.getStudents();

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

  getStudents(): void {
    
    this.isLoading = true;
    this.studentsService.get().subscribe({
        next: (students: Students) => { this.students.items = students.items; this.isLoading = false;},
        error: (error: any) => { this.poNotificationService.error("Falha no retorno dos dados de alunos"); this.isLoading = false;}
    });
  }


}
