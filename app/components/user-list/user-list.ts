import {Component, Input, Output, EventEmitter} from 'angular2/core';
let template = require('./user-list.html');

@Component({
  selector: 'user-list',
  template
})
export class UserList {
  @Input() users;
  @Output() selected = new EventEmitter();

  selectUser(user) {
    this.selected.emit({user});
  }
}
