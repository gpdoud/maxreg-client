import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Event} from '../event.class';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {

  event: Event
  verify:boolean

  constructor(
    private esrv: EventService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;

    this.esrv.get(id)
      .subscribe(respond => {
        console.log(respond);
        this.event = respond;
      },
        err => {
          console.error(err);
        });
  }

  setVerifyT(): void {
    this.verify = true;
  }
  setVerifyF(): void {
    this.verify = false;
  }

  edit(): void {
    this.esrv.change(this.event)
      .subscribe(
        resp => { //success
          console.log("Event Update Successful", resp);
          this.router.navigateByUrl(`/event/list`);
        },
        err => { //error
          console.error(err);
        }
      );
  }

  delete(): void {
    this.esrv.remove(this.event)
      .subscribe(
        resp => { //sucess
          console.log("Event Delete Successful", resp);
          this.router.navigateByUrl('event/list')
        },
        err => {
          console.error("Event Delete Failed!")
        }
      );
  }
}
