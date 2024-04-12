import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Students } from '../interfaces/students.model';
import { environment } from 'src/environments/environment';
import { Student } from '../interfaces/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  get(page: number, pageSize: number, fields?: string, filter?: string, sort?: string): Observable<Students> {
    const httpParams = new HttpParams()
    .append('page', page)
    .append('pageSize',pageSize)
    .append('FIELDS', fields ? fields : '')
    .append('FILTER', filter ? filter : '')
    .append('SORT', sort ? sort : 'id')
    
    return this.httpClient.get<Students>(environment.studentsAPI, { params: httpParams});
  } 
  
  getById(id: string):Observable<Student> {
    return this.httpClient.get<Student>(`${environment.studentsAPI}/${id}`);
  }

  post(body: Student): Observable<Student> {
    return this.httpClient.post<Student>(environment.studentsAPI, body);
  }
  
  put(body: Student): Observable<Student> {
    return this.httpClient.put<Student>(`${environment.studentsAPI}/${body.id}`, body);
  }

  delete(id: string):Observable<any> {
    return this.httpClient.delete<any>(`${environment.studentsAPI}/${id}`);
  }
}
