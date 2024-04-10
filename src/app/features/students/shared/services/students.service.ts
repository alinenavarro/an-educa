import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Students } from '../interfaces/students.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  get(page: number, pageSize: number): Observable<Students> {
    const httpParams = new HttpParams()
    .append('page', page)
    .append('pageSize',pageSize)
    
    return this.httpClient.get<Students>(environment.studentsAPI, { params: httpParams});
  }    

}
