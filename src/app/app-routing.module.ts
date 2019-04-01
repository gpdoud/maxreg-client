import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuestListComponent } from './guest/guest-list/guest-list.component';

const routes: Routes = [
  {path: 'guest/list', component: GuestListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
