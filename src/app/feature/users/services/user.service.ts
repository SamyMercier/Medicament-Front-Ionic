import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private readonly baseUrl = "http://localhost:8080/utilisateurs";

  findAll = () => {
    return this.http.get(this.baseUrl);
  }

  findById = (id: string) => {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get(url);
  }

  save = (body: User) => {
    return this.http.post(this.baseUrl, body);
  }

  update = (body: User) => {
    return this.http.patch(this.baseUrl, body);
  }

  deleteById = (id : string) => {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
