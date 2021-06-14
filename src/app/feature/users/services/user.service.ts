import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly baseUrl = "http://localhost:8080/utilisateurs";

  constructor(private http : HttpClient) { }

  findAll = () : Observable<User[]> => {
    return this.http.get<User[]>(this.baseUrl);
  }

  findById = (id : string) : Observable<User> => {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }
  
  deleteById = (id : string) : Observable<User> => {
    return this.http.delete<User>(`${this.baseUrl}/${id}`);
  }

  save = (body : User) : Observable<User> => {
    return this.http.post<User>(this.baseUrl, body);
  }

  update = (body : User) : Observable<User> => {
    return this.http.patch<User>(this.baseUrl, body);
  }

}
