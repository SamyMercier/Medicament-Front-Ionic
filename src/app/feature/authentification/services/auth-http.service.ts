import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**
 * Class réprésentant le service d'un compte
 * @author fabien
 */
export class AuthHttpService {

  private readonly baseUrl: string =  "http://localhost:8080/auth";

  constructor(private http: HttpClient) { }

  /**
   * Cette méthode permet de se connecter à un compte
   * @param connexionDTO
   * @returns l'identifiant et l'état d'un compte
   */
  public seConnecterCompte = (connexionDTO: any) => {
    return this.http.post(`${this.baseUrl}/connexion`, connexionDTO, {responseType: "text"})
  }
}
