import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Compte } from '../../compte/models/compte';
import { CompteService } from '../../compte/services/compte.service';

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

  connexionForm : FormGroup;

  compte : Compte = new Compte(0, "" , "", []);

  constructor(
    private service : CompteService, 
    private fb : FormBuilder, 
    private router : Router
    ) { 
      this.connexionForm = this.fb.group({
        email : "",
        motDePasse : ""
      })
    }
  
  ngOnInit(): void {}

  /**
   * Cette méthode permet de vérifier si un compte existe
   */
  verifierCompteExiste = () => {
    let email = this.connexionForm.value.email;
    let motDePasse = this.connexionForm.value.motDePasse;
    let compteRecupere = this.service.findByEmail(email);
    console.log(motDePasse + " " +compteRecupere.motDePasse);
    if(compteRecupere.email === email && compteRecupere.motDePasse === motDePasse) {
      this.router.navigate(["/home"]);
    }
  }

}
