import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu/menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: Menu[]= [
    new Menu('Home','/home','Max Registration System'),
    new Menu('Events','/event/list','List of Events'),
    new Menu('Guests','/guest/list','List of Guests'),
    new Menu('Users','/user/list','List of Users'),
    new Menu('About','/about','About the Authors'),
    new Menu('LogIn/Out','/login','Login')
  ]

  constructor() { }

  ngOnInit() {
  }

}