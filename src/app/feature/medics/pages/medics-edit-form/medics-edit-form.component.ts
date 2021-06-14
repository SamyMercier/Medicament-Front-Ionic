import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Duree } from 'src/app/feature/duree/models/duree';
import { Frequence } from 'src/app/feature/frequence/models/frequence';
import { Medic } from '../../models/medic';
import { MedicService } from '../../services/medic.service';

@Component({
  selector: 'app-medics-edit-form',
  templateUrl: './medics-edit-form.component.html',
  styleUrls: ['./medics-edit-form.component.css']
})
export class MedicsEditFormComponent implements OnInit {

  medicForm : FormGroup = new FormGroup({
    nom : new FormControl(""),
  });

  medic : Medic = new Medic("","",new Duree(" ", 0 , new Date()),new Frequence("",[]));

  constructor(
    private medicService: MedicService,
    private fb : FormBuilder,
    private router : Router,
    private route : ActivatedRoute
  ) {
    let id : string ;
    this.route.paramMap.subscribe(params => {
       id = params.get("id");
       console.log("id => " + id);
       this.medicService.getById(id).subscribe(elem  => {
         this.medic = elem;
         this.medicForm = this.fb.group({
          nom : this.medic.nom,
        })
       })
    });
   }

  ngOnInit(): void {
  }

  modifier = () => {
    this.medic.nom = this.medicForm.value.nom;
    
    this.medicService.update(this.medic).subscribe(medic => {
      this.router.navigate(["home"]);
    })
  }

}
