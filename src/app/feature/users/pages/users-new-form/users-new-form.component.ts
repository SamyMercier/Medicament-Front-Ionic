import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-users-new-form',
  templateUrl: './users-new-form.component.html',
  styleUrls: ['./users-new-form.component.css']
})
export class UsersNewFormComponent implements OnInit {

  compteId: string;
  userProfile: FormGroup;
  user: User;
  dateNow: string;
  listeUsersAvantAjout: User[];


  constructor(public fb: FormBuilder, public userService: UserService, public router: Router) {
    this.user = new User(null, null, null, null, new Date(), []);
    this.userProfile = this.fb.group({
      nom: [''],
      prenom: [''],
      dateNaissance: ['']
    })
   }

  ngOnInit(): void {
    this.compteId = localStorage.getItem("compteId");
    this.userService.findAllByCompteId(this.compteId).subscribe(
      (data: User[]) => this.listeUsersAvantAjout = data,
      console.error)
    
  }

  inscription = () => {
    this.user.nom  =this.userProfile.value.nom;
    this.user.prenom = this.userProfile.value.prenom;
    this.user.compteId = this.compteId;
    this.dateNow = formatDate(this.userProfile.value.dateNaissance, 'yyyy-MM-dd', 'en_US');
    this.user.dateNaissance  = new Date(this.dateNow);
    console.log(this.user)
    this.userService.save(this.user).subscribe(user => {
      this.router.navigate(["/utilisateurs"]);
    });
  }

}
