/**
 * Class représentant le modèle de notifications
 * @author fabien
 */
export class Notification {
    public utilisateurId: string;
    public message: string;
    public date: Date;
    public isVue: boolean;

    constructor(utilisateurId: string, message: string, date: Date, isVue: boolean) {
        this.utilisateurId = utilisateurId;
        this.message = message;
        this.date = date;
        this.isVue = isVue;
    }
}
