import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MedicService } from '../../services/medic.service';
import { Medic } from '../../models/medic';
import { Router } from '@angular/router';
import { DureesNewFormComponent } from 'src/app/feature/duree/pages/durees-new-form/durees-new-form.component';
import { FrequencesNewFormComponent } from 'src/app/feature/frequence/pages/frequences-new-form/frequences-new-form.component';
import { Duree } from 'src/app/feature/duree/models/duree';
import { Frequence } from 'src/app/feature/frequence/models/frequence';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MedicTmp } from '../../models/medic-tmp';

@Component({
  selector: 'app-medics-new-form',
  templateUrl: './medics-new-form.component.html',
  styleUrls: ['./medics-new-form.component.css']
})
export class MedicsNewFormComponent implements OnInit {

  medicForm: FormGroup;
  chaqueJourXHeuresForm: FormGroup;
  heures: FormArray;

  medic: Medic;
  duree: Duree;
  frequence: Frequence;

  frequenceData: String[] = [];
  dureeData: String[] = [];

  medicTmp: MedicTmp = new MedicTmp("", [], [], []);

  data: String[] = [];

  constructor(
    private medicService: MedicService,
    private fb: FormBuilder,
    private router: Router,
    private dialogRefDuree: MatDialogRef<DureesNewFormComponent>,
    private dialogRefFrequence: MatDialogRef<FrequencesNewFormComponent>,
    private dialog: MatDialog) {
    this.duree = new Duree("", 0, new Date());
    this.frequence = new Frequence("", []);
    this.medicForm = this.fb.group({
      nom: "",
      heures: this.fb.array([]),
    });

  }

  ngOnInit() {
  }

  openDureeFormDialog() {
    const dialogConfigDuree = new MatDialogConfig();

    dialogConfigDuree.disableClose = true;
    dialogConfigDuree.autoFocus = true;

    this.dialogRefDuree = this.dialog.open(DureesNewFormComponent, dialogConfigDuree);
    this.dialogRefDuree.afterClosed().subscribe(res => {
      this.dureeData = res;
    })
  }

  openFrequenceFormDialog() {

    const dialogConfigFrequence = new MatDialogConfig();
    dialogConfigFrequence.disableClose = true;
    dialogConfigFrequence.autoFocus = true;

    this.dialogRefFrequence = this.dialog.open(FrequencesNewFormComponent, dialogConfigFrequence);
    this.dialogRefFrequence.afterClosed().subscribe(res => {
      this.frequenceData = res;
    })
  }


  ajouter = () => {
    this.medicTmp.nom = this.medicForm.value.nom;
    this.medicTmp.dureeData = this.dureeData;
    this.medicTmp.frequenceData = this.frequenceData;
    console.log(this.medicForm.value)
    this.medicTmp.listeHeures = this.medicForm.value.heures;
    console.log(this.medicTmp)
    this.medicService.create(this.medicTmp).subscribe(medic => {
      this.router.navigate(["/medics"]);
    });
  }

  addHeures() {
    const heures = this.getHeures();
    heures.push(this.fb.group({
      heure: new FormControl(),
    }));

  }

  getHeures() {
    return this.medicForm.controls["heures"] as FormArray;
  }

  trackByFn(index) {
    return index;
  }

}
