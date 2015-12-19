import {Component} from 'angular2/core';
import {RouteParams, Router, ComponentInstruction, CanActivate} from 'angular2/router';
import {UserService} from '../../services/users/users';
import {isLoggedIn} from '../../helpers/is-logged-in';
let template = require('./user-profile.html');

@Component({
  selector: 'user-profile',
  template
})
@CanActivate((prev: ComponentInstruction, next: ComponentInstruction) => isLoggedIn(prev, next))
export class UserProfile {
  user: any;
  prev: any;

  constructor(public params: RouteParams, users: UserService, public router: Router) {
    users.getUsers()
      .subscribe((userList) => {
        let user = userList.filter(user => user.username == params.get('id'));
        this.user = user[0];
      });
  }

  routerOnActivate(next: ComponentInstruction, prev: ComponentInstruction) {
    this.prev = prev;
  }

  goBack() {
    if (!this.prev.terminal) {
      this.router.navigate(['/Admin', 'Dashboard']);
    } else {
      this.router.parent.recognize(`/${this.prev.urlPath}`).then((ins) => this.router.navigateByInstruction(ins));
    }
  }
}
