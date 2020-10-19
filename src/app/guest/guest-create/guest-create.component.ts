import { Component, OnInit } from '@angular/core';

import { Guest } from '../guest.class';
import { GuestService } from '../guest.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component
  ({
    selector: 'app-guest-create',
    templateUrl: './guest-create.component.html',
    styleUrls: ['./guest-create.component.css']
  })
export class GuestCreateComponent implements OnInit {

  guest: Guest = new Guest();

  constructor(private gsrv: GuestService,
    private router: Router) { }

  save():void{
    this.gsrv.create(this.guest)
    .subscribe(
      respond => { //success
        console.log(respond);
        this.router.navigateByUrl('/guest/list');
      },
      err =>{ //error
        console.error(err);
      }
    );
  }

  ngOnInit() {

  }

}
