import {Component, View} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, CanActivate} from 'angular2/router';
let template = require('./admin.html');
import {Dashboard} from '../dashboard/dashboard';
import {NotFound} from '../notfound/notfound';
import {isLoggedIn} from '../../helpers/is-logged-in';

@Component({
  selector: 'admin',
  template,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {
    path: '/dashboard',
    component: Dashboard,
    name: 'Dashboard'
  },
  {
    path: '/**',
    component: NotFound,
    name: 'NotFound'
  }
])
@CanActivate(() => isLoggedIn())
export class Admin {

}
