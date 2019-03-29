import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';

import { GuestDetailComponent } from './guest/guest-detail/guest-detail.component';
import { GuestListComponent } from './guest/guest-list/guest-list.component';
import { GuestEditComponent } from './guest/guest-edit/guest-edit.component';
import { GuestCreateComponent } from './guest/guest-create/guest-create.component';

import { EventListComponent } from './event/event-list/event-list.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { EventEditComponent } from './event/event-edit/event-edit.component';
import { EventCreateComponent } from './event/event-create/event-create.component';

import { AttendeeListComponent } from './attendee/attendee-list/attendee-list.component';
import { AttendeeDetailComponent } from './attendee/attendee-detail/attendee-detail.component';
import { AttendeeEditComponent } from './attendee/attendee-edit/attendee-edit.component';
import { AttendeeCreateComponent } from './attendee/attendee-create/attendee-create.component';

@NgModule
({
  declarations: 
  [
    AppComponent,
    GuestDetailComponent,
    GuestListComponent,
    GuestEditComponent,
    GuestCreateComponent,
    EventListComponent,
    EventDetailComponent,
    EventEditComponent,
    EventCreateComponent,
    AttendeeListComponent,
    AttendeeDetailComponent,
    AttendeeEditComponent,
    AttendeeCreateComponent
  ],
  imports: 
  [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
