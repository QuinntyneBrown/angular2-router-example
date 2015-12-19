import {Component} from 'angular2/core';
import {Router, ComponentInstruction} from 'angular2/router';
import {Auth} from '../../services/auth/auth';

@Component({
  selector: 'modal',
  template: ''
})
export class Modal {
  constructor(public auth: Auth, public router: Router) {}

  routerOnActivate(next: ComponentInstruction, prev: ComponentInstruction) {
    if (window.confirm('Are you sure you want to logout?')) {
      this.auth.logout();
    }

    this.router.navigate(['/Home']);
    return false;
  }
}
