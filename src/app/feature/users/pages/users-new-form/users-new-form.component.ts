import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users-new-form',
  templateUrl: './users-new-form.component.html',
  styleUrls: ['./users-new-form.component.css']
})
export class UsersNewFormComponent implements OnInit {

  userProfile: FormGroup;

  constructor(public fb: FormBuilder) {
    this.userProfile = this.fb.group({
      nom: [''],
      prenom: [''],
      dateDeNaissance: ['']
    })
   }

  ngOnInit(): void {
  }

  inscription = () => {
    console.log(this.userProfile.value)
  }

}
