import { Component, OnInit } from '@angular/core';
import { AssistantOuAssiste } from '../../models/assistant-ou-assiste';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users : User[];
  assistants : AssistantOuAssiste[];

  constructor(userService:UserService) {
    this.users=userService.findAll();
  }

  ngOnInit(): void {
  }

  getFirstUserName = () => {
    let firstUser = this.users[0];
    return firstUser.nom;
  }

}
