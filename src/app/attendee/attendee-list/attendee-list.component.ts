import { Component, OnInit } from '@angular/core';
import { Event } from '../../event/event.class';
import { Attendee } from '../attendee.class';
import { AttendeeService } from '../attendee.service';
import { EventService } from '../../event/event.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component
  ({
    selector: 'app-attendee-list',
    templateUrl: './attendee-list.component.html',
    styleUrls: ['./attendee-list.component.css']
  })
export class AttendeeListComponent implements OnInit {
  event: Event;
  attendees: Attendee;


  refresh(): void {
    this.esrv.get(this.event.id.toString())
      .subscribe
      (
        resp => this.event = resp
      );
  };

  delete(attendees: Attendee): void {
    this.asrv.remove(attendees)
      .subscribe
      (
        resp => {
          console.log("Attendee Delete Successful", resp);
          this.refresh();
        },
        err => {
          console.error("Delete Failed", err);
        }
      );
  }

  constructor(private asrv: AttendeeService, private esrv: EventService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params.eid;


    this.esrv.get(id)
      .subscribe(resp => {
        console.log(resp);
        this.event = resp;
      })

  }

}