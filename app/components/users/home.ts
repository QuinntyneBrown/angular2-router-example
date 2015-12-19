import {Component} from 'angular2/core';
import {UserList} from '../user-list/user-list';
import {UserService} from '../../services/users/users';
let template = require('./users.html');

@Component({
  selector: 'users',
  directives: [UserList],
  template: '<user-list [users]="users"></user-list>'
})
export class Home {
  users: any;
  constructor(public userService: UserService) {}

  routerOnActivate() {
    return new Promise((resolve) => {
      this.userService
        .getUsers()
        .subscribe((data: any) => {
          this.users = data;
          resolve(true);
        }, () => {
          resolve(false);
        });
    });
  }
}
