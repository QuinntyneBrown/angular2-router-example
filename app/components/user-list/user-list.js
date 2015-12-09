import {Component, Input, OnInit} from 'angular2/angular2';
let template = require('./user-list.html');

@Component({
  selector: 'user-list',
  inputs: ['users'],
  template
})
export class UserList implements OnInit {
  //@Input('users') users;
  ngOnInit() {
    console.log(this.users);
  }
}
