import {Component} from 'angular2/core';
import {UserList} from '../user-list/user-list';
import {UserService} from '../../services/users/users';
let template = require('./users.html');

@Component({
  selector: 'users',
  directives: [UserList],
  template
})
export class Users {
  users: any;
  constructor(public userService: UserService) {
  }

  routerOnActivate() {
    return new Promise((resolve) => {
      this.userService.getUsers()
        .subscribe((data: any) => {
          data = data.json();
          data = data.results;
          data = data.map(item => item.user);

          this.users = data;
          resolve(true);
        }, () => {
          resolve(false);
        });
    });
  }
}
