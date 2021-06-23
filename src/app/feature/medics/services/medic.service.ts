import { Injectable } from '@angular/core';
import { Medic } from '../models/medic';
import { formatDate } from "@angular/common";import { Duree } from '../../duree/models/duree';
import { Frequence } from '../../frequence/models/frequence';
import { Horaire } from '../../frequence/models/horaire';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { MedicTmp } from '../models/medic-tmp';

@Injectable({
  providedIn: 'root'
})
export class MedicService {


  constructor(private http : HttpClient) { }

  getAll = () : Observable<Medic[]> => {
    return this.http.get<Medic[]>(`${environment.urlSpring}/medics/`);
  }

  getById = (id : String) : Observable<Medic> => {
    return this.http.get<Medic>(`${environment.urlSpring}/medics/${id}`);
  }

  getByNom = (nom : String) : Observable<Medic> => {
    return this.http.get<Medic>(`${environment.urlSpring}/medics/nom/${nom}`);
  }

  //PATCH si vous avez mis PATCH dans le back
  //PUT si vous avez mis PUT dans le back
  update = (parc : Medic) : Observable<Medic> => {
    return this.http.patch<Medic>(`${environment.urlSpring}/medics`, parc);
  }

  create = (medic: MedicTmp) : Observable<Medic> => {
    return this.http.post<Medic>(`${environment.urlSpring}/medics`, medic);
  }

  //Si vous avez fait le back avec un parc en BODY
  delete = (parc : Medic) : Observable<Medic> => {
    return this.http.request<Medic>('delete', `${environment.urlSpring}/medics`, { body : parc});
  }

  //Si vous avez fait un back avec un deleteById
  deleteById = (parc: Medic) : Observable<Medic> => {
    return this.http.delete<Medic>(`${environment.urlSpring}/medics/${parc.id}`)
  }

}
