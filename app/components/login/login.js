import {Component, View, FormBuilder} from 'angular2/angular2';
import {FORM_DIRECTIVES} from 'angular2/angular2';
import {NgIf} from 'angular2/angular2';
import template from './login.html';
import {Auth} from '../../services/auth/auth';

@Component({
  selector: 'login-form',
  directives: [FORM_DIRECTIVES, NgIf],
  template
})
export class Login {
  static parameters = [Auth]
  constructor(Auth) {
    this.Auth = Auth;
    this.loggedIn = false;
  }

  routerOnActivate() {
    this.Auth.check()
        .then((result) => {
          this.loggedIn = result;
        })
        .catch((error) => {
          this.loggedIn = false;
        });
  }

  login(formModel) {
    this.invalid = false;
    this.Auth.login(formModel.credentials.username, formModel.credentials.password)
            .then(() => this.loggedIn = true)
            .catch((e) => {
              this.invalid = true;
            });
  }
}
