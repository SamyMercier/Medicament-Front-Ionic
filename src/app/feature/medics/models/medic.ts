import { Duree } from "../../duree/models/duree";
import { Frequence } from "../../frequence/models/frequence";

export class Medic {

    public id: string;
    public nom : string;
    public duree: Duree;
    public frequence: Frequence;

    constructor(id:string, nom:string, duree:Duree, frequence:Frequence){
        this.id = id;
        this.nom = nom;
        this.duree = duree;
        this.frequence = frequence;
    }

}
