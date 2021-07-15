import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Compte } from '../../compte/models/compte';

@Injectable({
  providedIn: 'root'
})
/**
 * Class réprésentant le service d'un compte
 * @author fabien
 */
export class AuthHttpService {

  private readonly baseUrl = `${environment.urlSpring}/auth`;

  constructor(private http: HttpClient) { }

  /**
   * Cette méthode permet de se connecter à un compte
   * @param compte
   * @returns l'identifiant et l'état d'un compte
   */
  public seConnecterCompte = (compte: Compte) => {
    return this.http.post(`${this.baseUrl}/connexion`, compte, {responseType: "text"})
  }
}
