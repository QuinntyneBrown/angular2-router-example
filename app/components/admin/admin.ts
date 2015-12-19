import {Component, View} from 'angular2/core';
import {RouteConfig, CanActivate, Route} from 'angular2/router';
import {Users} from '../users/users';
import {Dashboard} from '../dashboard/dashboard';
import {NotFound} from '../notfound/notfound';
import {isAdmin} from '../../helpers/is-logged-in';
let template = require('./admin.html');

@Component({
  selector: 'admin',
  template
})
@RouteConfig([
  new Route({path: '/users/...', component: Users, name: 'Users'}),
  new Route({path: '/dashboard', component: Dashboard, name: 'Dashboard', useAsDefault: true}),
  new Route({path: '/**', component: NotFound, name: 'NotFound'})
])
@CanActivate(() => isAdmin('/admin/dashboard'))
export class Admin {

}
