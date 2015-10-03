import {Component, View, FormBuilder} from 'angular2/angular2';
import {FORM_DIRECTIVES} from 'angular2/angular2';
import {NgIf} from 'angular2/angular2';
import template from './login.html';
import {Auth, default as authBindings} from '../../services/auth/auth';

@Component({
  selector: 'login-form',
  viewBindings: [authBindings]
})
@View({
  directives: [FORM_DIRECTIVES, NgIf],
  template
})
export class Login {
  static parameters = [Auth]
  constructor(Auth) {
    this.Auth = Auth;
  }

  login(formModel) {
    this.Auth.login(formModel.credentials.username, formModel.credentials.password);
  }
}