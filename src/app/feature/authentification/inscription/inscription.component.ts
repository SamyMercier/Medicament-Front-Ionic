import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Compte } from '../../compte/models/compte';
import { CompteService } from '../../compte/services/compte.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})

/**
 * Class qui représente le component d'inscription
 * @author fabien
 * @version 1.0
 */
export class InscriptionComponent implements OnInit {

  inscriptionForm : FormGroup;

  compte : Compte = new Compte(0, "" , "", []);
  compteurIdentifiant = 1;

  constructor(
    private service : CompteService, 
    private fb : FormBuilder, 
    private router : Router
    ) { 
      this.inscriptionForm = this.fb.group({
        email : "",
        motDePasse : "",
        motDePasseConfirme : ""
      })
    }

  ngOnInit(): void {}

  /**
   * Cette méthode permet de créer un compte
   */
  creerCompte = () => {
    let email = this.inscriptionForm.value.email;
    let motDePasse = this.inscriptionForm.value.motDePasse;
    let nouveauCompte = new Compte(++this.compteurIdentifiant, email, motDePasse, []);
    this.service.save(nouveauCompte);
    console.log(this.service.listeComptes);
    this.router.navigate(["/connexion"])
  }
}
