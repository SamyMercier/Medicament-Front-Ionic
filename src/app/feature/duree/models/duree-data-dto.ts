export class DureeDataDto {

    public dateDebut: Date;
    public choixDuree:String;
    public dateFin: Date;
    public nbJour: number;

    constructor(dateDebut:Date, choixDuree:String, dateFin: Date, nbJour: number){
        this.dateDebut = dateDebut;
        this.choixDuree = choixDuree;
        this.dateFin = dateFin;
        this.nbJour = nbJour;
    }

}
