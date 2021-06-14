import { Injectable } from '@angular/core';
import { Compte } from '../models/compte';

@Injectable({
  providedIn: 'root'
})
/**
 * Class réprésentant le service d'un compte
 * @author fabien
 * @version 1.0
 */
export class CompteService {

  compteTest : Compte = new Compte(1,"test@test.com","test", []); 

  listeComptes = [this.compteTest];

  constructor() { }

  /**
   * Cette méthode me permet de récupérer un compte à partir d'une adresse email
   * @param email 
   * @returns 
   */
  public findByEmail = (email : string) : Compte => {
    let compteRecupere : Compte;
    this.listeComptes.forEach(compte => {
      if(compte.email == email) {
        compteRecupere = compte;
      }
    })
    return compteRecupere;
  }

  public save = (compte : Compte) : void => {
    this.listeComptes.push(compte);
    console.log("compte " + compte + " est créer");
  }

}
