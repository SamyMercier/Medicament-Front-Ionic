export class MedicTmp {

    public nom: String;
    public dureeData: String[];
    public frequenceData: String[];
    public listeHeures: String[];

    constructor(nom: String, dureeData:String[], frequenceData:String[], listeHeures: String[]){
        this.nom = nom;
        this.dureeData = dureeData;
        this.frequenceData = frequenceData;
        this.listeHeures = listeHeures;
    }
}
