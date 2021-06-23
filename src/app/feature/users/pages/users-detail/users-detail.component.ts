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

  user! : User ;

  constructor(
    private service : UserService,
    private router : Router,
    private route : ActivatedRoute
    ) { }

  ngOnInit(): void {
    let id : string;
    this.route.paramMap.subscribe(params => {
      id =  params.get("id")
    });
    
    this.service.findById(id).subscribe(elem  => {
      this.user = elem
    })
  }
}
