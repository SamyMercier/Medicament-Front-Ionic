import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Compte } from '../../compte/models/compte';
import { CompteService } from '../../compte/services/compte.service';
import { AuthHttpService } from '../services/auth-http.service';

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
    private compteService: CompteService,
    private authService: AuthHttpService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.inscriptionForm = this.formBuilder.group({
      email: ['', Validators.required],
      motDePasse: ['', Validators.required]
    });
  }

  /**
   * Cette méthode permet de créer un compte
   */
  public creerCompte = () => {
    this.compteService.creerCompte(this.inscriptionForm.value).subscribe((isCompteCree: boolean) => {
      if (isCompteCree)
        this.seConnecterCompte();
    });
  }

  // Refactoriser cette méthode
  seConnecterCompte() {
    this.authService.seConnecterCompte(this.inscriptionForm.value).subscribe((donnee: string) => {
      const compte: any = JSON.parse(donnee);
      if (compte.etat) {
        localStorage.setItem("compteId", compte.id);
        window.location.href = "home";
      }
    }, (err) => {
      return; // redirection vers la page d'authentification
    });
  }

}
