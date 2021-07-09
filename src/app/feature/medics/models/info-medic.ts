import { Horaire } from "../../frequence/models/horaire";

export class InfoMedic {
    public id: String;
    public nom: String;


    public dateDebut: Date;
    public choixDuree: String;
    public dateFin: Date;
    public nbJour: number;

    public choixFrequence: String;
    public x: number;
    public heureDebut: Horaire;
    public rappel: Horaire;
    public heureFin: Horaire;
    public lundi: Boolean;
    public mardi: Boolean;
    public mercredi: Boolean;
    public jeudi: Boolean;
    public vendredi: Boolean;
    public samedi: Boolean;
    public dimanche: Boolean;

    public listeHeuresData: String[];


    constructor(id: String, nom: String, dateDebut: Date, choixDuree: String, dateFin: Date, nbJour: number, choixFrequence: String, x: number, heureDebut: Horaire, rappel: Horaire, heureFin: Horaire,
        lundi: Boolean, mardi: Boolean, mercredi: Boolean, jeudi: Boolean, vendredi: Boolean, samedi: Boolean, dimanche: Boolean, listeHeuresData: String[]) {

        this.id = id;
        this.nom = nom;

        this.dateDebut = dateDebut;
        this.choixDuree = choixDuree;
        this.dateFin = dateFin;
        this.nbJour = nbJour;

        this.choixFrequence = choixFrequence;
        this.x = x;
        this.heureDebut = heureDebut;
        this.heureFin = heureFin;
        this.rappel = rappel;
        this.lundi = lundi;
        this.mardi = mardi;
        this.mercredi = mercredi;
        this.jeudi = jeudi;
        this.vendredi = vendredi;
        this.samedi = samedi;
        this.dimanche = dimanche;

        this.listeHeuresData = listeHeuresData;


    }


}
