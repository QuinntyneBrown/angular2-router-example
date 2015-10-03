import {Component, View} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, CanActivate} from 'angular2/router';
import template from './admin.html';
import {Dashboard} from '../dashboard/dashboard';

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
  }
])
@CanActivate(() => {
  return true;
})
export class Admin {
  
}

