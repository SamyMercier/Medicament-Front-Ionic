import { Medic } from "../../medics/models/medic";
import { Notification } from "../../notification/models/notification";
import { Rendezvous } from "../../rendezvous/models/rendezvous";
import { AssistantOuAssiste } from "./assistant-ou-assiste";

export class User {
    public id : string;
    public compteId : string;
    public nom : string;
    public prenom : string;
    public dateNaissance : Date;
    public assistants : AssistantOuAssiste[];

    constructor(
        id : string,
        compteId : string,
        nom : string,
        prenom : string,
        dateNaissance : Date,
        assistants : AssistantOuAssiste[]
        ) {
            this.id = id;
            this.compteId = compteId;
            this.nom = nom;
            this.prenom = prenom;
            this.dateNaissance = dateNaissance;
            this.assistants = assistants;
    }

}
