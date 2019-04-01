import { Component, OnInit } from '@angular/core';
import { Guest } from '../guest.class';
import { GuestService } from '../guest.service';
import { Router } from '@angular/router';

@Component
  ({
    selector: 'app-guest-list',
    templateUrl: './guest-list.component.html',
    styleUrls: ['./guest-list.component.css']
  })
export class GuestListComponent implements OnInit {

  guests: Guest[];

  constructor(private gsrv: GuestService,
    private router: Router) { }

  ngOnInit() {
    this.gsrv.list()
      .subscribe(resp => {
        console.log(resp);
        this.guests = resp;
      })
  }
}
