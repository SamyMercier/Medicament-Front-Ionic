import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compte } from '../models/compte';

@Injectable({
  providedIn: 'root'
})
/**
 * Class réprésentant le service d'un compte
 * @author fabien
 */
export class CompteService {

  private readonly baseUrl: string =  "http://localhost:8080/comptes";

  constructor(private http: HttpClient) { }

  /**
   * Cette méthode permet de créer un compte
   * @param creationCompteDTO
   */
  public creerCompte = (creationCompteDTO: Compte) : Observable<boolean> => {
    return this.http.post<boolean>(this.baseUrl, creationCompteDTO);
  }

  /**
   * Cette méthode permet de modifier un compte
   * @param modificationCompteDTO
   */
  public modifierCompte = (modificationCompteDTO: Compte) => {
    this.http.patch(this.baseUrl, modificationCompteDTO);
  }

  /**
   * Cette méthode permet de désactiver un compte
   * @param desactivationCompteDTO
   */
  public desactiverCompte = (desactivationCompteDTO: any) => {
    this.http.patch(`${this.baseUrl}/desactiver`, desactivationCompteDTO);
  }

}
