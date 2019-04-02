import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import{Event} from '../event.class';
import{EventService} from '../event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  event: Event
  verify:boolean = false;

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
    this.router.navigateByUrl(`/event/edit/${this.event.id}`);
      
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
