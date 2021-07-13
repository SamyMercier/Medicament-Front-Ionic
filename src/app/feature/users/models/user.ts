import { Medic } from "../../medics/models/medic";
import { Notification } from "../../notification/models/notification";
import { Rendezvous } from "../../rendezvous/models/rendezvous";
import { AssistantOuAssiste } from "./assistant-ou-assiste";

export class User {
    public compteId : number;
    public utilisateurId : number;
    public nom : string;
    public prenom : string;
    public dateDeNaissance : Date;
    public assistants : AssistantOuAssiste[];
    public assistes : AssistantOuAssiste[];
    public medicaments : Medic[];
    public notifications : Notification[];
    public rendezVous : Rendezvous[];

    constructor(
        compteId : number,
        utilisateurId : number,
        nom : string,
        prenom : string,
        dateDeNaissance : Date,
        assistants : AssistantOuAssiste[],
        assistes : AssistantOuAssiste[],
        medicaments : Medic[],
        notifications : Notification[],
        rendezVous : Rendezvous[]
        ) {
            this.compteId = compteId;
            this.utilisateurId = utilisateurId;
            this.nom = nom;
            this.prenom = prenom;
            this.dateDeNaissance = dateDeNaissance;
            this.assistants = assistants;
            this.assistes = assistes;
            this.medicaments = medicaments;
            this.notifications = notifications;
            this.rendezVous = rendezVous;
    }

    public getNom = () => {
        return this.nom;
    }

}
