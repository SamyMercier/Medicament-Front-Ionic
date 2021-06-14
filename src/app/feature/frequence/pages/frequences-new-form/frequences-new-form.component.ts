import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatRadioChange } from '@angular/material/radio';
import { Frequence } from '../../models/frequence';

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

  dataToReturn: string[] = [];

  constructor(
    private dialogRefFrequence: MatDialogRef<FrequencesNewFormComponent>,
    private fb: FormBuilder,
  ) {

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
    this.dataToReturn.push(this.frequenceForm.value)
    if (this.choixFrequenceChaqueJoursXParHeures()) {
      this.dataToReturn.push(this.chaqueJourXHeuresForm.value);
    }
    if (this.choixFrequenceCertainsJours()) {
      this.dataToReturn.push(this.CertainsJoursForm.value);
    }
    if (this.choixFrequenceTtsxJours()) {
      this.dataToReturn.push(this.ttsXJoursForm.value)
    }
    this.dialogRefFrequence.close(this.dataToReturn);
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
