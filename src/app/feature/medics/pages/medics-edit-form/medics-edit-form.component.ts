import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Duree } from 'src/app/feature/duree/models/duree';
import { DureeDataDto } from 'src/app/feature/duree/models/duree-data-dto';
import { DureesNewFormComponent } from 'src/app/feature/duree/pages/durees-new-form/durees-new-form.component';
import { DureeService } from 'src/app/feature/duree/service/duree.service';
import { Frequence } from 'src/app/feature/frequence/models/frequence';
import { FrequenceDataDto } from 'src/app/feature/frequence/models/frequence-data-dto';
import { Horaire } from 'src/app/feature/frequence/models/horaire';
import { HoraireDataDto } from 'src/app/feature/frequence/models/horaire-data-dto';
import { FrequencesNewFormComponent } from 'src/app/feature/frequence/pages/frequences-new-form/frequences-new-form.component';
import { FrequenceService } from 'src/app/feature/frequence/service/frequence.service';
import { InfoMedic } from '../../models/info-medic';
import { Medic } from '../../models/medic';
import { MedicTmp } from '../../models/medic-tmp';
import { MedicService } from '../../services/medic.service';

@Component({
  selector: 'app-medics-edit-form',
  templateUrl: './medics-edit-form.component.html',
  styleUrls: ['./medics-edit-form.component.css']
})
export class MedicsEditFormComponent implements OnInit {

  idMedicament: String;

  infoMedic: InfoMedic;

  medicForm: FormGroup;

  heures: FormArray;

  dureeDataDto: DureeDataDto;
  frequenceDataDto: FrequenceDataDto;
  horaireDataDto: HoraireDataDto;


  medicTmp: MedicTmp;

  constructor(
    private modalController: ModalController,

    private dureeService: DureeService,
    private frequenceService: FrequenceService,
    private medicService: MedicService,

    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) {

    this.idMedicament = "";
    this.infoMedic = new InfoMedic("", "", new Date(), "", new Date(), 0, "", 0, new Horaire(0, 0), new Horaire(0, 0), new Horaire(0, 0), false, false, false, false, false, false, false, []);
    this.dureeDataDto = new DureeDataDto(null, null, null, null);
    this.frequenceDataDto = new FrequenceDataDto(null, null, null, null, null, null, null, null, null, null, null, null);
    this.horaireDataDto = new HoraireDataDto([]);
    this.medicTmp = new MedicTmp("", this.dureeDataDto, this.frequenceDataDto, []);

    this.medicForm = this.fb.group({
      nom: "",
      heures: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    let id: string;
    this.route.paramMap.subscribe(params => {
      id = params.get("id");
      console.log("id => " + id);
      this.medicService.getInfoMedic(id).subscribe(elem => {
        this.infoMedic = elem;
        this.idMedicament = id;
        console.log(elem)
        console.log(this.infoMedic);
        this.dureeDataDto.choixDuree = this.infoMedic.choixDuree;
        this.dureeDataDto.dateDebut = this.infoMedic.dateDebut;
        this.dureeDataDto.dateFin = this.infoMedic.dateFin;
        this.dureeDataDto.nbJour = this.infoMedic.nbJour;

        this.frequenceDataDto.choixFrequence = this.infoMedic.choixFrequence;
        this.frequenceDataDto.heureDebut = this.infoMedic.heureDebut;
        this.frequenceDataDto.heureFin = this.infoMedic.heureFin;
        this.frequenceDataDto.rappel = this.infoMedic.rappel;
        this.frequenceDataDto.x = this.infoMedic.x;
        this.frequenceDataDto.lundi = this.infoMedic.lundi;
        this.frequenceDataDto.mardi = this.infoMedic.mardi;
        this.frequenceDataDto.mercredi = this.infoMedic.mercredi;
        this.frequenceDataDto.jeudi = this.infoMedic.jeudi;
        this.frequenceDataDto.vendredi = this.infoMedic.vendredi;
        this.frequenceDataDto.samedi = this.infoMedic.samedi;
        this.frequenceDataDto.dimanche = this.infoMedic.dimanche;

        console.log("freq =< " +JSON.stringify(this.frequenceDataDto));
      })
    });
  }

  async openModalDureeForm() {
    const modaldureeForm = await this.modalController.create({
      component: DureesNewFormComponent,
      componentProps: {
        dateDebut: this.dureeDataDto.dateDebut,
        choixDuree: this.dureeDataDto.choixDuree,
        dateFin: this.dureeDataDto.dateFin,
        nbJour: this.dureeDataDto.nbJour,
      }
    });
    modaldureeForm.onDidDismiss().then(data => {
      this.dureeDataDto = data.data;
    })
    return await modaldureeForm.present();
  }

  async openModalFrequenceForm() {
    const modalFrequenceForm = await this.modalController.create({
      component: FrequencesNewFormComponent,
      componentProps: {
        choixFrequence: this.frequenceDataDto.choixFrequence,
        x: this.frequenceDataDto.x,
        heureDebut: this.frequenceDataDto.heureDebut,
        heureFin: this.frequenceDataDto.heureFin,
        rappel: this.frequenceDataDto.rappel,
        lundi: this.frequenceDataDto.lundi,
        mardi: this.frequenceDataDto.mardi,
        mercredi: this.frequenceDataDto.mercredi,
        jeudi: this.frequenceDataDto.jeudi,
        vendredi: this.frequenceDataDto.vendredi,
        samedi: this.frequenceDataDto.samedi,
        dimanche: this.frequenceDataDto.dimanche,
      }
    });
    modalFrequenceForm.onDidDismiss().then(data => {
      this.frequenceDataDto = data.data;
    })
    return await modalFrequenceForm.present();
  }


  modifier = () => {

    this.medicTmp.nom = this.medicForm.value.nom;
    this.medicTmp.dureeData = this.dureeDataDto;
    this.medicTmp.frequenceData = this.frequenceDataDto;

    this.medicForm.value.heures.forEach(element => {
      this.medicTmp.listeHeuresData.push(element.heure);
    });

    console.log("AJOUTER => " + JSON.stringify(this.medicTmp));
    this.medicService.update(this.medicTmp).subscribe(medic => {
      this.router.navigate(["/medics/update", this.idMedicament]);
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

  choixDureePasDeFin() {
    return this.dureeDataDto.choixDuree === this.dureeService.PAS_DE_FIN;
  }

  choixDureeJusqueX() {
    return this.dureeDataDto.choixDuree === this.dureeService.JUSQUE_DATE;
  }

  choixDureePendantX() {
    return this.dureeDataDto.choixDuree === this.dureeService.PENDANT_X_JOURS;
  }

  choixFrequenceChaqueJoursXParJour() {
    return this.frequenceDataDto.choixFrequence === this.frequenceService.CHAQUE_JOURS_X_PAR_JOURS;
  }

  choixFrequenceChaqueJoursTtsXHeures() {
    return this.frequenceDataDto.choixFrequence === this.frequenceService.CHAQUE_JOURS_TTS_X_HEURES;
  }

  choixFrequenceTtsxJours() {
    return this.frequenceDataDto.choixFrequence === this.frequenceService.TTS_X_JOURS;
  }

  choixFrequenceCertainsJours() {
    return this.frequenceDataDto.choixFrequence === this.frequenceService.CERTAINS_JOURS;
  }

  certainsJoursLundi() {
    return this.frequenceDataDto.lundi
  }
  certainsJoursMardi() {
    return this.frequenceDataDto.mardi
  }
  certainsJoursMercredi() {
    return this.frequenceDataDto.mercredi
  }
  certainsJoursJeudi() {
    return this.frequenceDataDto.jeudi
  }
  certainsJoursVendredi() {
    return this.frequenceDataDto.vendredi
  }
  certainsJoursSamedi() {
    return this.frequenceDataDto.samedi
  }
  certainsJoursDimanche() {
    return this.frequenceDataDto.dimanche
  }

}
