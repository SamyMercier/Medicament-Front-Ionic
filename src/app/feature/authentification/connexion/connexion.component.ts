import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Compte } from '../../compte/models/compte';
import { CompteService } from '../../compte/services/compte.service';
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

  constructor(private service:AuthHttpService, private router:Router) {}
  
  ngOnInit(): void {
    this.form= new FormGroup({
      email: new FormControl(""),
      motDePasse: new FormControl("")
    })
  }

}
