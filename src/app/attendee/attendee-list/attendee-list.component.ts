import { Component, OnInit } from '@angular/core';

import { Attendee } from '../attendee.class';
import { AttendeeService } from '../attendee.service';
import { Router } from '@angular/router';


@Component
  ({
    selector: 'app-attendee-list',
    templateUrl: './attendee-list.component.html',
    styleUrls: ['./attendee-list.component.css']
  })
export class AttendeeListComponent implements OnInit {
  attendees: Attendee[];

  constructor(private gsrv: AttendeeService,
    private router: Router) { }

  ngOnInit() {
    this.gsrv.list()
      .subscribe(resp => {
        console.log(resp);
        this.attendees = resp;
      })

  }

}