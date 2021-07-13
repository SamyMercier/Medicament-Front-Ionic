import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**
 * Class réprésentant le service d'un compte
 * @author fabien
 * @version 2.0
 */
export class AuthHttpService {

  private baseUrl:string =  "http://localhost:8080/auth";

  constructor(private http:HttpClient) { }

  /**
   * Cette méthode permet de s'authentifier via l'API
   * @param connexionDTO
   * @returns une connexion à un compte
   */
  public connexion(connexionDTO:any) {
    return this.http.post(`${this.baseUrl}/connexion`, connexionDTO, {responseType: "text"})
  }
}
