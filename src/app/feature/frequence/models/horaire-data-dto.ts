import { Horaire } from "./horaire";

export class HoraireDataDto {

    public listeHeures: String[]

    constructor(listeHeures: String[]){
        this.listeHeures = listeHeures;
    }

}
