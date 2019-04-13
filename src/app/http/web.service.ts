import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './web-domain';


@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(
    private http: HttpClient
  ) { }
  listUsers( page: number): Observable<object> {
    return this.http.get(`https://reqres.in/api/users?${page}`);
  }
  saveUser(user: User): Observable<object> {
    return this.http.post(`https://reqres.in/api/users`, user);
  }
}
