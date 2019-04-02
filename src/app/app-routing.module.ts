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

import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserCreateComponent } from './user/user-create/user-create.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './user/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },

  { path: 'attendee/list/:eid', component: AttendeeListComponent },
  { path: 'attendee/edit/:id', component: AttendeeEditComponent },
  { path: 'attendee/create/:eid', component: AttendeeCreateComponent },
  { path: 'attendee/detail', component: AttendeeDetailComponent },

  { path: 'event/list', component: EventListComponent },
  { path: 'event/edit/:id', component: EventEditComponent },
  { path: 'event/create', component: EventCreateComponent },
  { path: 'event/detail/:id', component: EventDetailComponent },

  { path: 'guest/list', component: GuestListComponent },
  { path: 'guest/edit/:id', component: GuestEditComponent },
  { path: 'guest/create', component: GuestCreateComponent },
  { path: 'guest/detail/:id', component: GuestDetailComponent },

  { path: 'user/list', component: UserListComponent },
  { path: 'user/edit/:id', component: UserEditComponent },
  { path: 'user/create', component: UserCreateComponent },
  { path: 'user/detail/:id', component: UserDetailComponent },

  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },

  { path: '**', component: HomeComponent } //last route always
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
