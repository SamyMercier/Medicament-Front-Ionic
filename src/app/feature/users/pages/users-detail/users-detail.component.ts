import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {

  user! : User;

  constructor(
    private service : UserService,
    private router : Router,
    private route : ActivatedRoute
    ) { }

  ngOnInit(): void {
    let id : string = this.getIdFromRoute();
    this.user = this.getUserFromId(id);
      
  }

  getIdFromRoute : any = () => {
    this.route.paramMap.subscribe(params => {
      return params.get("id")
    });
  }

  getUserFromId : any = (id : string) => {
    this.service.findById(id).subscribe(elem  => {
      return elem;
    });
  }

}
