import { DureeDataDto } from "../../duree/models/duree-data-dto";
import { FrequenceDataDto } from "../../frequence/models/frequence-data-dto";
import { Horaire } from "../../frequence/models/horaire";
import { HoraireDataDto } from "../../frequence/models/horaire-data-dto";

export class MedicTmp {

    public nom: String;
    public dureeData: DureeDataDto;
    public frequenceData: FrequenceDataDto;
    public listeHeuresData: String[];

    constructor(nom: String, dureeData:DureeDataDto, frequenceData:FrequenceDataDto, listeHeuresData: String[]){
        this.nom = nom;
        this.dureeData = dureeData;
        this.frequenceData = frequenceData;
        this.listeHeuresData = listeHeuresData;
    }
}
