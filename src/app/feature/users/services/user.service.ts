import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AssistantOuAssiste } from '../models/assistant-ou-assiste';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly baseUrl = `${environment.urlSpring}/utilisateurs`;

  constructor(private http : HttpClient) { }

  findAll = () : Observable<User[]> => {
    return this.http.get<User[]>(this.baseUrl);
  }

  findAllByCompteId = (id : string) : Observable<User[]> => {
    return this.http.get<User[]>(`${this.baseUrl}/${id}/utilisateurs`)
  }

  findAllAssistantsByCompteId = (compteId : string) : Observable<AssistantOuAssiste[]> => {
    return this.http.get<AssistantOuAssiste[]>(`${this.baseUrl}/${compteId}/assistants`)
  }

  findAllAssistantsByUtilisateurId = (id : string) : Observable<AssistantOuAssiste[]> => {
    return this.http.get<AssistantOuAssiste[]>(`${this.baseUrl}/assistants/${id}`)
  }

  findAllAssistesByCompteId = (id : string) : Observable<AssistantOuAssiste[]> => {
    return this.http.get<AssistantOuAssiste[]>(`${this.baseUrl}/${id}/assistes`)
  }

  findAllAssistesByUtilisateurId = (id : string) : Observable<AssistantOuAssiste[]> => {
    return this.http.get<AssistantOuAssiste[]>(`${this.baseUrl}/assistes/${id}`)
  }

  findById = (id : string) : Observable<User> => {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }
  
  deleteById = (id : string) : Observable<User> => {
    return this.http.delete<User>(`${this.baseUrl}/${id}`);
  }

  save = (body : User) : Observable<User> => {
    console.log("ouaf")
    console.log(body);
    return this.http.post<User>(`${this.baseUrl}`, body);
  }

  update = (body : User) : Observable<User> => {
    return this.http.patch<User>(this.baseUrl, body);
  }

}
