import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatRadioChange } from '@angular/material/radio';
import { ModalController } from '@ionic/angular';
import { Frequence } from '../../models/frequence';
import { FrequenceDataDto } from '../../models/frequence-data-dto';
import { FrequenceService } from '../../service/frequence.service';

@Component({
  selector: 'app-frequences-new-form',
  templateUrl: './frequences-new-form.component.html',
  styleUrls: ['./frequences-new-form.component.css']
})
export class FrequencesNewFormComponent implements OnInit {

  frequence: Frequence;

  frequenceForm: FormGroup;

  ttsXJoursForm: FormGroup;
  ChaqueJoursXParJourForm: FormGroup;
  chaqueJourXHeuresForm: FormGroup;
  CertainsJoursForm: FormGroup;

  choixFrequence: string = "";
  frequences: string[] = [this.frequenceService.CHAQUE_JOURS_X_PAR_JOURS, this.frequenceService.CHAQUE_JOURS_TTS_X_HEURES,
     this.frequenceService.TTS_X_JOURS,this.frequenceService.CERTAINS_JOURS];

  frequenceDataDto: FrequenceDataDto;

  constructor(
    private viewCtrl: ModalController,
    private fb: FormBuilder,
    private frequenceService : FrequenceService,
  ) {
    this.frequenceDataDto = new FrequenceDataDto(null,null,null,null,null,null,null,null,null,null,null,null);


    this.frequenceForm = this.fb.group({
      choixFrequence: new FormControl(),

      x: new FormControl(),

      heureDebut: new FormControl(),
      rappel: new FormControl(),
      heureFin: new FormControl(),

      lundi: new FormControl(true),
      mardi: new FormControl(true),
      mercredi: new FormControl(true),
      jeudi: new FormControl(true),
      vendredi: new FormControl(true),
      samedi: new FormControl(false),
      dimanche: new FormControl(false),
    });

    this.chaqueJourXHeuresForm = this.fb.group({
      heureDebut: new FormControl(),
      rappel: new FormControl(),
      heureFin: new FormControl(),
    });

    this.ttsXJoursForm = this.fb.group({
      x: new FormControl(),
    });

    this.CertainsJoursForm = this.fb.group({
      lundi: new FormControl(true),
      mardi: new FormControl(true),
      mercredi: new FormControl(true),
      jeudi: new FormControl(true),
      vendredi: new FormControl(true),
      samedi: new FormControl(),
      dimanche: new FormControl(),
    });
  }

  ngOnInit(): void {
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  dismissSave() {
    this.frequenceDataDto.choixFrequence = this.frequenceForm.value.choixFrequence;
    this.frequenceDataDto.x = this.frequenceForm.value.x;
    this.frequenceDataDto.heureDebut = this.frequenceForm.value.heureDebut;
    this.frequenceDataDto.heureFin = this.frequenceForm.value.heureFin;
    this.frequenceDataDto.rappel = this.frequenceForm.value.rappel;
    this.frequenceDataDto.lundi = this.frequenceForm.value.lundi;
    this.frequenceDataDto.mardi = this.frequenceForm.value.mardi;
    this.frequenceDataDto.mercredi = this.frequenceForm.value.mercredi;
    this.frequenceDataDto.jeudi = this.frequenceForm.value.jeudi;
    this.frequenceDataDto.vendredi = this.frequenceForm.value.vendredi;
    this.frequenceDataDto.samedi = this.frequenceForm.value.samedi;
    this.frequenceDataDto.dimanche = this.frequenceForm.value.dimanche;

    this.viewCtrl.dismiss(this.frequenceDataDto);
    }

  choixFrequenceChaqueJoursXParJour() {
    return this.frequenceForm.value.choixFrequence[0] === this.frequenceService.CHAQUE_JOURS_X_PAR_JOURS;
  }

  choixFrequenceChaqueJoursTtsXHeures() {
    return this.frequenceForm.value.choixFrequence ===this.frequenceService.CHAQUE_JOURS_TTS_X_HEURES;
  }

  choixFrequenceTtsxJours() {
    return this.frequenceForm.value.choixFrequence === this.frequenceService.TTS_X_JOURS;
  }

  choixFrequenceCertainsJours() {
    return this.frequenceForm.value.choixFrequence == this.frequenceService.CERTAINS_JOURS;
  }

}
