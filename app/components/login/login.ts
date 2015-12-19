import {Component, View, } from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder} from 'angular2/common';
let template = require('./login.html');
import {Auth} from '../../services/auth/auth';
import {Router, RouteParams} from 'angular2/router';

@Component({
  selector: 'login-form',
  directives: [FORM_DIRECTIVES],
  template
})
export class Login {
  loggedIn: boolean = false;
  invalid: boolean = false;
  constructor(public Auth: Auth, public params: RouteParams, public router: Router) {
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
            .then(() => {
              let target = this.params.get('target');

              if (target) {
                this.router.navigateByUrl(target);
              }
            })
            .catch((e) => {
              this.invalid = true;
            });
  }
}
