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

  constructor() {
    
  }

  ngOnInit(): void {
  }

}
