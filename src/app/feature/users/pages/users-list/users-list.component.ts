import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  assistes : AssistantOuAssiste[];

<<<<<<< Updated upstream
  constructor(
    private service : UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.findAll().subscribe(
      (data:User[])=>this.users = data,
      console.error)
=======
  constructor(private service: UserService, private router : Router) {
  }

  ngOnInit(): void {
    this.service.findAll().subscribe((data:User[])=>this.users=data, console.error);
  
>>>>>>> Stashed changes
  }

}
