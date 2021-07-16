import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonItemSliding } from '@ionic/angular';
import { AssistantOuAssiste } from '../../models/assistant-ou-assiste';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  compteIdSession: string;
  utilisateurIdSession: string;

  users: User[] = [];
  assistants: AssistantOuAssiste[] = [];
  assistes: AssistantOuAssiste[] = [];

  constructor(
    private service: UserService,
    private router: Router
  ) {
    this.compteIdSession = localStorage.getItem("compteId");
   }

  ngOnInit(): void {
    this.service.findAllByCompteId(this.compteIdSession).subscribe(
      (data: User[]) => this.users = data,
      console.error)
    if (this.utilisateurIdSession === undefined) {
     
    }else {
      this.updateAssistantsAvecUtilisateurId();
      this.updateAssistesAvecUtilisateurId();
    }

    if(localStorage.getItem("utilisateurId")!=null){
      this.utilisateurIdSession = localStorage.getItem("utilisateurId");
    }
  }

  changerUtilisateur = (utilisateurId: string, itemSliding: IonItemSliding) => {
    this.utilisateurIdSession = utilisateurId;
    localStorage.setItem("utilisateurId",utilisateurId)
    itemSliding.close()
    this.updateAssistantsAvecUtilisateurId();
    this.updateAssistesAvecUtilisateurId();
  }

  seDeconnecter = (itemSliding: IonItemSliding) => {
    localStorage.removeItem("utilisateurId");
    this.utilisateurIdSession = undefined;
    this.assistants = [];
    this.assistes = [];
    itemSliding.close()
  }

  updateAssistantsAvecCompteId = () => {
    this.service.findAllAssistantsByCompteId(this.compteIdSession).subscribe(
      (data: AssistantOuAssiste[]) => this.assistants = data,
      console.error)
  }

  updateAssistesAvecCompteId = () => {
    this.service.findAllAssistesByCompteId(this.compteIdSession).subscribe(
      (data: AssistantOuAssiste[]) => this.assistes = data,
      console.error)
  }

  updateAssistantsAvecUtilisateurId = () => {
    this.service.findAllAssistantsByUtilisateurId(this.utilisateurIdSession).subscribe(
      (data: AssistantOuAssiste[]) => this.assistants = data,
      console.error)
  }

  updateAssistesAvecUtilisateurId = () => {
    this.service.findAllAssistesByUtilisateurId(this.utilisateurIdSession).subscribe(
      (data: AssistantOuAssiste[]) => this.assistes = data,
      console.error)
  }

  aucunUtilisateurConnecte = () => {
    return localStorage.getItem("utilisateurId")!=null;
  }

  deconnectionDuCompte = () => {
    localStorage.removeItem("compteId");
    localStorage.removeItem("utilisateurId");
  }
}
