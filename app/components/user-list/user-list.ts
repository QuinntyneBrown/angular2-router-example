import {Component, Input, OnInit} from 'angular2/core';
let template = require('./user-list.html');

@Component({
  selector: 'user-list',
  template
})
export class UserList {
  @Input('users') users;
}
