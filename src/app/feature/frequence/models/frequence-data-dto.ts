import { Horaire } from "./horaire";

export class FrequenceDataDto {

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

    constructor(choixFrequence: String, x: number, heureDebut: Horaire, rappel: Horaire, heureFin: Horaire,
        lundi: Boolean, mardi: Boolean, mercredi: Boolean, jeudi: Boolean, vendredi: Boolean, samedi: Boolean, dimanche: Boolean) {
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

    }

}
