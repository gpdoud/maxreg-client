import { Component, OnInit, ɵSWITCH_VIEW_CONTAINER_REF_FACTORY__POST_R3__ } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user-service';
import { User } from '../user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;
  verify: boolean;

  constructor(private usrv: UserService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;

    this.usrv.get(id)
      .subscribe(respond => {
        console.log(respond);
        this.user = respond;
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
    this.usrv.change(this.user)
      .subscribe(
        resp => { //success
          console.log(resp);
          this.router.navigateByUrl(`/user/edit/${this.user.id}`);
        },
        err => { //error
          console.error(err);
        }
      );
  }

  delete(): void {
    this.usrv.remove(this.user)
      .subscribe(
        resp => { //sucess
          console.log("User Delete Successful", resp);
          this.router.navigateByUrl('user/list')
        },
        err => {
          console.error("User Delete Failed!")
        }
      );
  }
}
