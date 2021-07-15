import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/feature/users/models/user';
import { UserService } from 'src/app/feature/users/services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  compteIdSession: string;
  utilisateurIdSession: string;
  utilisateurConnecte: User;

  constructor(
    private service: UserService,
    private router: Router
  ) {
    this.compteIdSession = localStorage.getItem("compteId");
    this.utilisateurIdSession = localStorage.getItem("utilisateurId")
    this.recupererUtilisateurViaSession();
   }

  ngOnInit(): void {
    this.recupererUtilisateurViaSession();

    if(this.isUtilisateurConnecte){
      this.router.navigate(['/connexion']);
    }

  }

  recupererUtilisateurViaSession = () => {
    this.service.findById(this.utilisateurIdSession).subscribe(
      (data: User) => this.utilisateurConnecte = data,
      console.error)
  }

  isUtilisateurConnecte = () => {
    console.log(localStorage.getItem("utilisateurId")!=null)
    return localStorage.getItem("utilisateurId")!=null;
    
  }

}
