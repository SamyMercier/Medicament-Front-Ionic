import { Horaire } from "./horaire";

export class Frequence {

    public id: string;
    public jours: Date[];

    constructor(id:string, jours:Date[]){
        this.id = id;
        this.jours = jours;
    }

}
