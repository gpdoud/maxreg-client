import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user-service';
import { Router } from '@angular/router';

@Component
  ({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
  })
export class UserListComponent implements OnInit {

  users: User[];
  searchCriteria: string = "";
  
  constructor(private usrv: UserService,
    private router: Router) { }

  ngOnInit() {
    this.usrv.list()
      .subscribe(resp => {
        console.log(resp);
        this.users = resp;
      })
  }
}
