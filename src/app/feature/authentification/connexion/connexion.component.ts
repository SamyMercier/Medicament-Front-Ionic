import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthHttpService } from '../services/auth-http.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
/**
 * Class représentant le component d'une connexion
 * @author fabien
 * @version 1.0
 */
export class ConnexionComponent implements OnInit {

  form:FormGroup;

  /**
   * Constructeur
   * @param service
   */
  constructor(private service:AuthHttpService) {}
  
  /**
   * Cette méthode permet d'initiliaser du formulaire à zéro au démarage du composant
   */
  ngOnInit(): void {
    this.form= new FormGroup({
      email: new FormControl(""),
      motDePasse: new FormControl("")
    })
  }

  /**
   * Cette méthode permet de récupérer les données du formulaire, 
   * et ajoute dans le local storage l'id du compte
   */
  onSubmit(){
    this.service.connexion(this.form.value).subscribe((compteId:string)=>{
      localStorage.setItem("compteId", compteId);
      window.location.href = "home";
    }, (err)=>{
        return; // redirection vers la page d'authentification
    });
  }

}
