import {Component, View} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, CanActivate} from 'angular2/router';
import template from './admin.html';
import {Dashboard} from '../dashboard/dashboard';
import {NotFound} from '../notfound/notfound';
import {isLoggedIn} from '../../helpers/is-logged-in';

@Component({
  selector: 'admin'
})
@View({
  template,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {
    path: '/dashboard',
    component: Dashboard,
    as: 'Dashboard'
  },
  {
    path: '/**',
    component: NotFound,
    as: 'NotFound'
  }
])
@CanActivate(() => isLoggedIn())
export class Admin {
  
}

