import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Compte } from '../models/compte';

@Injectable({
  providedIn: 'root'
})
/**
 * Class réprésentant le service d'un compte
 * @author fabien
 */
export class CompteService {

  private readonly baseUrl = `${environment.urlSpring}/comptes`;

  constructor(private http: HttpClient) { }

  /**
   * Cette méthode permet de créer un compte
   * @param nouveauCompte
   */
  public creerCompte = (nouveauCompte: Compte) : Observable<boolean> => {
    return this.http.post<boolean>(this.baseUrl, nouveauCompte);
  }

  /**
   * Cette méthode permet de modifier un compte
   * @param compteModifie
   */
  public modifierCompte = (compteModifie: Compte) : any => {
    this.http.patch(this.baseUrl, compteModifie);
  }

  /**
   * Cette méthode permet de désactiver un compte
   * @param compteSuspendu
   */
  public desactiverCompte = (compteSuspendu: any) : any => {
    this.http.patch(`${this.baseUrl}/desactiver`, compteSuspendu);
  }

}
