import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { ActivatedRoute, Router } from '@angular/router';
import{Event} from '../event.class';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {
 
  event: Event = new Event;
  // toD: Date = new Date();
  // toDs = this.toD.toISOString();

  constructor(
    private esrv: EventService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  save(){
    // if(this.event.date == "")
    //   {
    //     this.event.date = this.toDs;
    //   }
    this.esrv.create(this.event)
    .subscribe(
      respond => { //success
        console.log(respond);
        this.router.navigateByUrl('/event/list');
      },
      err =>{ //error
        console.error(err);
      }
    );

  }

}
