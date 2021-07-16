import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medic } from 'src/app/feature/medics/models/medic';
import { MedicService } from 'src/app/feature/medics/services/medic.service';
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
  medics: Medic[];

  constructor(
    private userService: UserService,
    private medicService: MedicService,
    private router: Router
  ) {
    this.compteIdSession = localStorage.getItem("compteId");
    this.utilisateurIdSession = localStorage.getItem("utilisateurId")
   }

  ngOnInit(): void {
    if(!this.isUtilisateurConnecte()){
      this.router.navigate(['/utilisateurs']);
    }
    this.medicService.getAll().subscribe(elems => {
      this.medics = elems;
      this.cropAllMedicNames();
      console.log(this.medics);
    });
    this.recupererUtilisateurViaSession();

    

  }

  recupererUtilisateurViaSession = () => {
    if(this.utilisateurIdSession)
    this.userService.findById(this.utilisateurIdSession).subscribe(
      (data: User) => this.utilisateurConnecte = data,
      console.error)
  }

  isUtilisateurConnecte = () => {
    return localStorage.getItem("utilisateurId")!=null;
    
  }

  cropAllMedicNames = () => {
    for(let index = 0; index < this.medics.length; index++){
      this.medics[index].nom = this.medics[index].nom.replace(/, .*$/, "");
    }
  }

}
