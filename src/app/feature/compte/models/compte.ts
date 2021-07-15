import { User } from "../../users/models/user";

/**
 * Class représentant le modèle d'un compte
 * @author fabien
 */
export class Compte {
    private _email: string;
    private _motDePasse: string;

    constructor(email: string, motDePasse: string) {
        this._email = email;
        this._motDePasse = motDePasse;
    }
}
