import { Component, OnInit } from '@angular/core';
import { Event } from '../event/event.class';
import { EventService } from '../event/event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  todayDate = (new Date()).toISOString();
  events: Event[];
  todayEvents: Event[];

  constructor(private esrvc: EventService, ) {
    
   }

  ngOnInit() {
    this.esrvc.list()
      .subscribe(resp =>{
        console.log(resp);
        this.events = resp;

        console.log(this.todayDate);
      })
  }

}
