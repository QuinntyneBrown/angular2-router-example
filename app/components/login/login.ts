import {Component, View, FormBuilder} from 'angular2/angular2';
import {FORM_DIRECTIVES} from 'angular2/angular2';
import {NgIf} from 'angular2/angular2';
let template = require('./login.html');
import {Auth} from '../../services/auth/auth';

@Component({
  selector: 'login-form',
  directives: [FORM_DIRECTIVES, NgIf],
  template
})
export class Login {
  loggedIn: boolean = false;
  invalid: boolean = false;
  constructor(public Auth: Auth) {
  }

  routerOnActivate() {
    this.Auth.check()
        .then((result: any) => {
          this.loggedIn = result;
        })
        .catch(() => {
          this.loggedIn = false;
        });
  }

  login(formModel: any) {
    this.invalid = false;
    this.Auth.login(formModel.credentials.username, formModel.credentials.password)
            .then(() => this.loggedIn = true)
            .catch((e) => {
              this.invalid = true;
            });
  }
}
