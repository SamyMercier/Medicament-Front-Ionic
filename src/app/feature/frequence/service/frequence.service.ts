import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FrequenceService {

  readonly CHAQUE_JOURS_X_PAR_JOURS: string = "Chaque jours X par jours";
  readonly CHAQUE_JOURS_TTS_X_HEURES: string = "Chaque jours toutes les X heures";
  readonly TTS_X_JOURS: string = "Tous les X jours";
  readonly CERTAINS_JOURS: string = "Certains jours";

  constructor() { }


}
