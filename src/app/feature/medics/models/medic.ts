import { Duree } from "../../duree/models/duree";
import { Frequence } from "../../frequence/models/frequence";
import { InfoMedic } from "./info-medic";

export class Medic {

    public id: string;
    public nom : string;
    public duree: Duree;
    public frequence: Frequence;
    public infoMedic: InfoMedic;

    constructor(id:string, nom:string, duree:Duree, frequence:Frequence, infoMedic: InfoMedic){
        this.id = id;
        this.nom = nom;
        this.duree = duree;
        this.frequence = frequence;
        this.infoMedic = infoMedic;
    }

}
