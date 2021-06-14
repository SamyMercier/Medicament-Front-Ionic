import { User } from "../../users/models/user";

/**
 * Class représentant le modèle d'un compte
 * @author fabien
 * @version 1.0
 */
export class Compte {
    private _id: number;
    private _email: string;
    private _motDePasse: string;
    private _utilisateurs: User[];

    /**
     * @constructor
     * @param {number} id
     * @param {string} email 
     * @param {string} _motDePasse 
     * @param {[User]} utilisateurs 
     */
    constructor(id: number, email: string, motDePasse: string, utilisateurs: User[]) {
        this._id = id;
        this._email = email;
        this._motDePasse = motDePasse;
        this._utilisateurs = utilisateurs;
    }

    /**
     * Cette accesseur permet d'accéder à l'id d'un compte
     * @returns {number} : id
     * @public
     */
    public get id () : number {
        return this._id;
    }

    /**
     * Cette accesseur permet de récupérer à l'email d'un compte
     * @returns email
     * @public
     */
    public get email () : string {
        return this._email;
    }

    /**
     * Ce mutateur permet de modifier l'email d'un compte
     * @param {string} nouveauEmail
     * @public
     */
    public set email (nouveauEmail : string) {
        this._email = nouveauEmail;
    }

    /**
     * Cette accesseur permet de récupérer le mot de passe d'un compte
     * @returns {string} password
     * @public
     */
    public get motDePasse () : string {
        return this._motDePasse;
    }

    /**
     * Ce mutateur permet de modifier le mot de passe d'un compte
     * @param {string} nouveauMotDePasse
     * @public
     */
    public set motDePasse (nouveauMotDePasse : string) {
        this._motDePasse = nouveauMotDePasse;
    }

    /**
     * Cette accesseur permet de récupérer la liste des utilisateurs d'un compte
     * @returns {[User]} utilisateurs
     * @public
     */
    public get utilisateurs () : User[] {
        return this._utilisateurs;
    }

    /**
     * Ce mutateur permet de modifier la liste des utilisateurs d'un compte
     * @param {[User]} nouveauUtilisateurs
     * @public
     */
    public set utilisateurs (nouveauUtilisateurs : User[]) {
        this._utilisateurs = nouveauUtilisateurs;
    }

}
