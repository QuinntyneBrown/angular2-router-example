import {Component, Input, OnInit} from 'angular2/angular2';
let template = require('./user-list.html');

@Component({
  selector: 'user-list',
  template
})
export class UserList {
  @Input('users') users;
}
