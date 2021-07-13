import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthHttpService } from '../services/auth-http.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
/**
 * Class représentant le component d'une connexion Auth0
 * @author fabien
 * @version 2.0
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
      pseudoOrEmail: new FormControl(""),
      motDePasse: new FormControl("")
    })
  }

  /**
   * Cette méthode permet de récupérer les données du formulaire, 
   * et ajoute dans le local storage l'id du compte
   */
  onSubmit(){
    this.service.connexion(this.form.value).subscribe((donnee:string)=>{
      const compte:any = JSON.parse(donnee);
      if(compte.etat) {
        localStorage.setItem("id", compte.motDePasse);
        window.location.href = "home";
      }
    }, (err)=>{
        return; // redirection vers la page d'authentification
    });
  }

}
