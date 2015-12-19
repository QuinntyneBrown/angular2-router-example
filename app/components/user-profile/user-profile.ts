import {Component} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {UserService} from '../../services/users/users';
let template = require('./user-profile.html');

@Component({
  selector: 'user-profile',
  template
})
export class UserProfile {
  user: any;

  constructor(public params: RouteParams, users: UserService, public router: Router) {
    users.getUsers()
      .subscribe((userList) => {
        let user = userList.filter(user => user.username == params.get('id'));
        this.user = user[0];
      });
  }

}
