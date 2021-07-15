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
 */
export class InscriptionComponent implements OnInit {

  inscriptionForm: FormGroup;

  constructor(
    private service: CompteService,
    private fb: FormBuilder,
  ) {
    this.inscriptionForm = this.fb.group({
      email: "",
      motDePasse: ""
    })
  }

  ngOnInit(): void { }

  /**
   * Cette méthode permet de créer un compte
   */
  public creerCompte = () => {
    let isCompteCree: boolean;
    this.service.creerCompte(this.inscriptionForm.value).subscribe((donnee: boolean) => 
    isCompteCree = donnee, console.error);

    console.log(isCompteCree);
  }

}
