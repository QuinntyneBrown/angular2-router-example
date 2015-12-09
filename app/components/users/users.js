import {Component} from 'angular2/angular2';
import {UserList} from '../user-list/user-list';
import {UserService} from '../../services/users/users';
let template = require('./users.html');

@Component({
  selector: 'users',
  directives: [UserList],
  template
})
export class Users {
  static parameters = [UserService]
  constructor(userService) {
    this.userService = userService;
  }

  routerOnActivate() {
    return new Promise((resolve) => {
      this.userService.getUsers()
        .subscribe(data => {
          data = data.json();
          data = data.results;
          data = data.map(item => item.user);

          this.users = data;
          resolve(true);
        }, () => {
          reject(false);
        });
    });
  }
}
