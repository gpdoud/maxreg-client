import { Component, OnInit } from '@angular/core';

import { Event } from '../event.class';
import { EventService } from '../event.service';
import { Router } from '@angular/router';


@Component
  ({
    selector: 'app-event-list',
    templateUrl: './event-list.component.html',
    styleUrls: ['./event-list.component.css']
  })
export class EventListComponent implements OnInit {
  events: Event[];

  constructor(private gsrv: EventService,
    private router: Router) { }

  ngOnInit() {
    this.gsrv.list()
      .subscribe(resp => {
        console.log(resp);
        this.events = resp;
      })

  }

}
