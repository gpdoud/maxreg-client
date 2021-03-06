import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service';
import { User } from '../user.class';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User;
  verify: boolean;

  edit(): void {
    this.usrv.change(this.user)
      .subscribe(
        resp => { //success
          console.log("User Update Successful", resp);
          this.router.navigateByUrl(`/user/list`);
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

  constructor(
    private usrv: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;

    this.usrv.get(id)
      .subscribe(respond => {
        console.log(respond);
        this.user = respond;
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