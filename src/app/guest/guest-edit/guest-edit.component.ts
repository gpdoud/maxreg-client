import { Component, OnInit } from '@angular/core';
import { GuestService } from '../guest.service';
import { Guest } from '../guest.class';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-guest-edit',
  templateUrl: './guest-edit.component.html',
  styleUrls: ['./guest-edit.component.css']
})
export class GuestEditComponent implements OnInit {

  guest: Guest;
  verify: boolean;

  edit(): void {
    this.gsrv.change(this.guest)
      .subscribe(
        resp => { //success
          console.log("Guest Update Successful", resp);
          this.router.navigateByUrl(`/guest/list`);
        },
        err => { //error
          console.error(err);
        }
      );
  }

  delete(): void {
    this.gsrv.remove(this.guest)
      .subscribe(
        resp => { //sucess
          console.log("Guest Delete Successful", resp);
          this.router.navigateByUrl('guest/list')
        },
        err => {
          console.error("Guest Delete Failed!")
        }
      );
  }

  constructor(
    private gsrv: GuestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;

    this.gsrv.get(id)
      .subscribe(respond => {
        console.log(respond);
        this.guest = respond;
      },
        err => {
          console.error(err);
        });
    let verify = false;
  }

  setVerifyT(): void {
    this.verify = true;
  }
  setVerifyF(): void {
    this.verify = false;
  }
}