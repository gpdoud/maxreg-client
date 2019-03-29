import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { GuestDetailComponent } from './guest/guest-detail/guest-detail.component';
import { GuestComponent } from './guest/guest/guest.component';

@NgModule
({
  declarations: 
  [
    AppComponent,
    GuestDetailComponent,
    GuestComponent
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
