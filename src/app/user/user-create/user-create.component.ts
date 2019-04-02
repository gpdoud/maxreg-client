import { Component, OnInit } from '@angular/core';

import { User } from '../user.class';
import { UserService } from '../user-service';
import { Router, ActivatedRoute } from '@angular/router';


@Component
  ({
    selector: 'app-user-create',
    templateUrl: './user-create.component.html',
    styleUrls: ['./user-create.component.css']
  })
export class UserCreateComponent implements OnInit {

  user: User = new User();

  constructor(private usrv: UserService,
    private router: Router) { }

  save():void{
    this.usrv.create(this.user)
    .subscribe(
      respond => { //success
        console.log(respond);
        this.router.navigateByUrl('/user/list');
      },
      err =>{ //error
        console.error(err);
      }
    );
  }

  ngOnInit() {

  }

}
