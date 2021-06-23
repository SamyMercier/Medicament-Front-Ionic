import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DureeService {

  readonly PAS_DE_FIN : string ="Pas de fin";
  readonly JUSQUE_DATE : string ="Jusque date";
  readonly PENDANT_X_JOURS : string ="Pendant X jours";

  constructor() { }
}
