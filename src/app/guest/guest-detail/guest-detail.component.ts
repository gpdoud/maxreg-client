import { Component, OnInit, ɵSWITCH_VIEW_CONTAINER_REF_FACTORY__POST_R3__ } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GuestService } from '../guest.service';
import { Guest } from '../guest.class';

@Component({
  selector: 'app-guest-detail',
  templateUrl: './guest-detail.component.html',
  styleUrls: ['./guest-detail.component.css']
})
export class GuestDetailComponent implements OnInit {

  guest: Guest;
  verify: boolean;

  constructor(private gsrv: GuestService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;

    this.gsrv.get(id)
      .subscribe(respond => {
        console.log(respond);
        this.guest = respond;
      });

    let verify = false;
  }

  setVerifyT(): void {
    this.verify = true;
  }
  setVerifyF(): void {
    this.verify = false;
  }

  edit(): void {
    this.gsrv.change(this.guest)
      .subscribe(
        resp => { //success
          console.log(resp);
          this.router.navigateByUrl(`/guest/edit/${this.guest.id}`);
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
}
