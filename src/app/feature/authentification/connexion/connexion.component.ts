import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthHttpService } from '../services/auth-http.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
/**
 * Class représentant le component d'une connexion Auth0
 * @author fabien
 */
export class ConnexionComponent implements OnInit {

  connexionForm: FormGroup;

  /**
   * Constructeur
   * @param service
   */
  constructor(
    private authService: AuthHttpService,
    private formBuilder: FormBuilder
  ) { }

  /**
   * Cette méthode permet d'initiliaser du formulaire à zéro au démarage du composant
   */
  ngOnInit(): void {
    this.connexionForm = this.formBuilder.group({
      email: ['', Validators.required],
      motDePasse: ['', Validators.required]
    });
  }

  /**
   * Cette méthode permet se connecter à un compte,
   * et stocke dans le local storage l'identifiant du compte
   */
  seConnecterCompte() {
    this.authService.seConnecterCompte(this.connexionForm.value).subscribe((donnee: string) => {
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
