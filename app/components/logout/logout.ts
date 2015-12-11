import {Component} from 'angular2/angular2';
import {Auth} from '../../services/auth/auth';

@Component({
  selector: 'logout',
  template: `Logged Out`
})
export class Logout {
  constructor(auth: Auth) {
    auth.logout();
  }
}
