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

@NgModule
({
  declarations: 
  [
    AppComponent,
    GuestDetailComponent,
    GuestListComponent,
    GuestEditComponent,
    GuestCreateComponent
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
