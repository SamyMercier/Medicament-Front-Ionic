export class AssistantOuAssiste {
    public compteId : number;
    public utilisateurId : number;
    public nom : string;
    public prenom : string;
    public isAssistant : boolean;

    constructor(
        compteId : number, utilisateurId : number, nom : string, prenom : string, isAssistant : boolean) {
            this.compteId = compteId;
            this.utilisateurId = utilisateurId;
            this.nom = nom;
            this.prenom = prenom;
            this.isAssistant = isAssistant;
    }
}
