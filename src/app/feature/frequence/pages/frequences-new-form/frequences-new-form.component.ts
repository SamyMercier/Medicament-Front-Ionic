import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatRadioChange } from '@angular/material/radio';
import { Frequence } from '../../models/frequence';
import { FrequenceDataDto } from '../../models/frequence-data-dto';

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
  frequences: string[] = ["Chaque jours X par jours", "Chaque jours toutes les X heures", "Tous les X jours", "Certains jours"];

  frequenceDataDto: FrequenceDataDto;

  constructor(
    private dialogRefFrequence: MatDialogRef<FrequencesNewFormComponent>,
    private fb: FormBuilder,
  ) {
    this.frequenceDataDto = new FrequenceDataDto(null,null,null,null,null,null,null,null,null,null,null,null);


    this.frequenceForm = this.fb.group({
      choixFrequence: "",

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

  saveFrequence() {

    //console.log("freqnuce NEW this.frequenceFrom => "+  JSON.stringify(this.frequenceForm));
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

    this.dialogRefFrequence.close(this.frequenceDataDto);
  }

  closeFrequence() {
    this.dialogRefFrequence.close();
  }

  choixFrequenceChaqueJoursXParJour() {
    return this.frequenceForm.value.choixFrequence[0] === this.frequences[0];
  }

  choixFrequenceChaqueJoursXParHeures() {
    return this.frequenceForm.value.choixFrequence ===this.frequences[1];
  }

  choixFrequenceTtsxJours() {
    return this.frequenceForm.value.choixFrequence === this.frequences[2];
  }

  choixFrequenceCertainsJours() {
    return this.frequenceForm.value.choixFrequence == this.frequences[3];
  }

}
