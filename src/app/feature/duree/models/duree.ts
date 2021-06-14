export class Duree {

    public id: string;
    public nbJour: number;
    public dateDebut: Date;

    constructor(id:string, nbJour:number, dateDebut:Date){
        this.id = id ;
        this.nbJour = nbJour;
        this.dateDebut = dateDebut;
    }
}
