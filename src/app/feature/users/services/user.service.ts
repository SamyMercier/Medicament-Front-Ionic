import { Injectable } from '@angular/core';
import { Medic } from '../../medics/models/medic';
import { AssistantOuAssiste } from '../models/assistant-ou-assiste';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  doliprane: Medic = new Medic("dfg","nom",undefined,null);

  memorex: Medic= new Medic("dfgsdf","nom2",undefined,null);
  

  dateNaissance = new Date('01/01/1950');
  assistant: AssistantOuAssiste = new AssistantOuAssiste(2, 2, "Dubois", "Marc", true);
  assiste: AssistantOuAssiste = new AssistantOuAssiste(3, 3, "Dubois", "Marco", false);
  user : User = new User(1, 1, "Dubois", "Monique",this.dateNaissance,[this.assistant],[this.assiste],[this.doliprane,this.memorex],[],[]);

  listeUsers = [this.user];

  constructor() { }

  findAll = ():User[] => {
    return this.listeUsers;
  }

  findById = (id: number): User => {
    let userData: User;
    return this.listeUsers.filter(user => user.utilisateurId == id)[0]
  }

  findAllMedicsByUtilisateurId = (id : number) : Medic[] => {
    let user = this.findById(id);
    return user.medicaments;
  }

  addUser = (user : User) => {
    this.listeUsers.push(user);
  }

  deleteUserById = (id: number) => {
    let user = this.findById(id);
    let userPosition = this.listeUsers.indexOf(user);
    this.listeUsers.splice(userPosition,1);
  }

  updateUser = (user: User) => {
    this.deleteUserById(user.utilisateurId);
    this.addUser(user);
  }
}
