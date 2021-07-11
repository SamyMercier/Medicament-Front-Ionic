import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Duree } from 'src/app/feature/duree/models/duree';
import { Frequence } from 'src/app/feature/frequence/models/frequence';
import { Horaire } from 'src/app/feature/frequence/models/horaire';
import { InfoMedic } from '../../models/info-medic';
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

  medic : Medic = new Medic("","",new Duree(" ", 0 , new Date()),new Frequence("",[]),new InfoMedic("","",new Date(),"",new Date(),0,"",0,new Horaire(0,0),new Horaire(0,0),new Horaire(0,0),false,false,false,false,false,false,false,[]));

  constructor(
    private medicService: MedicService,
    private fb : FormBuilder,
    private router : Router,
    private route : ActivatedRoute
  ) {

   }

  ngOnInit(): void {
    let id : string ;
    this.route.paramMap.subscribe(params => {
       id = params.get("id");
       console.log("id => " + id);
       this.medicService.getById(id).subscribe(elem  => {
         this.medic = elem;
         console.log(elem)
         console.log(this.medic)

         this.medicService.getInfoMedic(this.medic.infoMedic.id);

         this.medicForm = this.fb.group({
          nom : this.medic.nom,
        })
       })
    });
  }

  modifier = () => {
    this.medic.nom = this.medicForm.value.nom;
    
    this.medicService.update(this.medic).subscribe(medic => {
      this.router.navigate(["home"]);
    })
  }

}
