import { Component, OnInit } from '@angular/core';

import { Event } from '../event.class';
import { EventService } from '../event.service';
import { Router } from '@angular/router';
import { Guest } from '../../guest/guest.class'
import { GuestService } from '../../guest/guest.service'


@Component
  ({
    selector: 'app-event-list',
    templateUrl: './event-list.component.html',
    styleUrls: ['./event-list.component.css']
  })
export class EventListComponent implements OnInit {

  events: Event[];
  guests: Guest[];
  constructor(
    private esrv: EventService,
    private gsrv: GuestService,
    private router: Router
  ) { }

  ngOnInit() {
    this.esrv.list()
      .subscribe(resp => {
        console.log(resp);
        this.events = resp;
      })
    this.gsrv.list()
      .subscribe(resp => {
        console.log(resp);
        this.guests = resp;
      })
  }

}
