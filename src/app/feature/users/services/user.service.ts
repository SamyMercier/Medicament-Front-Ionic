import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly baseUrl = "http://localhost:8080/utilisateurs";

  constructor(private http : HttpClient) { }

  findAll = () => {
    return this.http.get(this.baseUrl);
  }

  findById = (id : string) => {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  
  deleteById = (id : string) => {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  save = (body : User) => {
    return this.http.post(this.baseUrl, body);
  }

  update = (body : User) => {
    return this.http.patch(this.baseUrl, body);
  }

}
