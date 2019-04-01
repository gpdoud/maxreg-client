import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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

const routes: Routes = [
  { path: 'attendee/list', component: AttendeeListComponent },
  { path: 'attendee/edit', component: AttendeeEditComponent },
  { path: 'attendee/create', component: AttendeeCreateComponent },
  { path: 'attendee/detail', component: AttendeeDetailComponent },

  { path: 'event/list', component: EventListComponent },
  { path: 'event/edit/:id', component: EventEditComponent },
  { path: 'event/create', component: EventCreateComponent },
  { path: 'event/detail/:id', component: EventDetailComponent },

  { path: 'guest/list', component: GuestListComponent },
  { path: 'guest/edit/:id', component: GuestEditComponent },
  { path: 'guest/create', component: GuestCreateComponent },
  { path: 'guest/detail/:id', component: GuestDetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
