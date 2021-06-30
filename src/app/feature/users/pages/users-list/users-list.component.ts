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

  compteIdSession : string = "60bf6ba371add870faebfc20";
  utilisateurIdSession: string = "60c7089d62cc546af3942df3";

  users : User[];
  assistants : AssistantOuAssiste[];
  assistes : AssistantOuAssiste[];

  constructor(
    private service : UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.findAllByCompteId(this.compteIdSession).subscribe(
      (data:User[])=>this.users = data,
      console.error)
  }

  changerUtilisateur = (utilisateurId : string, itemSliding: IonItemSliding) =>{
    this.utilisateurIdSession = utilisateurId;
    console.log(this.utilisateurIdSession);
    itemSliding.close()
  }
}
