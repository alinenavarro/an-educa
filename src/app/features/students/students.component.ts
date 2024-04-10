import { Component, OnInit } from '@angular/core';

import { PoBreadcrumb, PoPageAction, PoTableColumn } from '@po-ui/ng-components';
import { Students } from './shared/interfaces/students.model';

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

  constructor() { }

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
    this.students.items = [
      {
        id: '000003',
        name: 'Aline Navarro',
        cpf: '6666666666',
        email: 'email@email.com',
        grade: 'MBA',
        phone: '666666666'
      }
    ]
  }


}
