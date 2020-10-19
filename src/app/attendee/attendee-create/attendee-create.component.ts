import { Component, OnInit } from '@angular/core';
import { Event } from '../../event/event.class';
import { Attendee } from '../attendee.class';
import { AttendeeService } from '../attendee.service';
import { EventService } from '../../event/event.service';
import { ActivatedRoute ,Router } from '@angular/router';
import { GuestService } from '../../guest/guest.service';
import { Guest } from '../../guest/guest.class';

@Component({
  selector: 'app-attendee-create',
  templateUrl: './attendee-create.component.html',
  styleUrls: ['./attendee-create.component.css']
})
export class AttendeeCreateComponent implements OnInit 
{
  eventId: number;
  attendee: Attendee = new Attendee (0,0)
  guests: Guest[];

  save(): void
  {
    this.attendee.eventId = this.eventId
    this.asrv.create(this.attendee)
      .subscribe
      (
        resp => 
        {
          console.log(resp);
          this.router.navigateByUrl(`/attendee/list/${this.eventId}`);
        },
        err => 
        {
          console.error(err);
        }
      )
  }

  constructor
  ( private esrv: EventService, 
    private asrv: AttendeeService, 
    private gsrv: GuestService, 
    private router: Router, 
    private route: ActivatedRoute
  ) 
    { }

  ngOnInit() 
  {
    this.eventId = this.route.snapshot.params.eid;
    this.gsrv.list()
      .subscribe(resp => 
        {
          this.guests = resp;
        })
  }

}
