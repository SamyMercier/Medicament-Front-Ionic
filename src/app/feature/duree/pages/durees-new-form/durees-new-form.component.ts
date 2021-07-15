import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DureeDataDto } from '../../models/duree-data-dto';
import { DureeService } from '../../service/duree.service';

import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-durees-new-form',
  templateUrl: './durees-new-form.component.html',
  styleUrls: ['./durees-new-form.component.css']
})
export class DureesNewFormComponent implements OnInit {

  dureeForm: FormGroup;
  jusqueXForm: FormGroup;
  pendantXForm: FormGroup;

  dateNow: string;
  dateDebut: Date;

  dureeDataDto: DureeDataDto;

  durees: string[] = ['Pas de fin', 'Jusque date', 'Pendant X jours'];

  constructor(
    private viewCtrl: ModalController,

    private fb: FormBuilder,
    private dureeService: DureeService,
  ) {

    this.dureeDataDto = new DureeDataDto(null, null, null, null);

    this.dateNow = formatDate(new Date(), 'yyyy-MM-dd', 'en_US');
    this.dateDebut = new Date(this.dateNow);

    this.dureeForm = this.fb.group({
      dateDebut: new FormControl(this.dateNow),
      choixDuree: new FormControl(),
      dateFin: new FormControl(),
      nbJour: new FormControl(),
    });

  }

  ngOnInit(): void {

  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }

  dismissSave() {
    
    this.dureeDataDto.choixDuree = this.dureeForm.value.choixDuree;
    this.dureeDataDto.dateDebut = this.dureeForm.value.dateDebut;
    this.dateNow = formatDate(this.dureeForm.value.dateFin, 'yyyy-MM-dd', 'en_US');
    this.dureeDataDto.dateFin  = new Date(this.dateNow);
    this.dureeDataDto.nbJour = this.dureeForm.value.nbJour;
    this.viewCtrl.dismiss(this.dureeDataDto);
  }

  choixDureePasDeFin() {
    return this.dureeForm.value.choixDuree == this.dureeService.PAS_DE_FIN;
  }

  choixDureeJusqueX() {
    return this.dureeForm.value.choixDuree == this.dureeService.JUSQUE_DATE;
  }

  choixDureePendantX() {
    return this.dureeForm.value.choixDuree == this.dureeService.PENDANT_X_JOURS;
  }

}
