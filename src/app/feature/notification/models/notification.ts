/**
 * Class représentant le modèle de notifications
 * @author fabien
 */
export class Notification {
    private _utilisateurId: string;
    private _message: string;

    constructor(utilisateurId: string, message: string) {
        this._utilisateurId = utilisateurId;
        this._message = message;
    }
}
