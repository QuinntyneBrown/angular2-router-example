import {Component, View} from 'angular2/core';
import {
  RouteConfig,
  Router,
  Route,
  Redirect,
  AsyncRoute,
  AuxRoute
} from 'angular2/router';
import {Home} from '../home/home';
import {Login} from '../login/login';
import {Modal} from '../modal/modal';
import {Logout} from '../logout/logout';
import {Admin} from '../admin/admin';
import {UserProfile} from '../user-profile/user-profile';
import {NotFound} from '../notfound/notfound';
import {Restricted} from '../restricted/restricted';
import {Loading} from '../loading/loading';
import {Auth} from '../../services/auth/auth';

import {LinkActiveDirective} from '../../directives/link-active/link-active';
let template = require('./app.html');

@Component({
  selector: 'app',
  template,
  directives: [Loading, LinkActiveDirective]
})
@RouteConfig([
  new Route({ path: '/', component: Home, name: 'Home'}),
  new AsyncRoute({path: '/about', loader: () => {
    return new Promise((resolve) => {
      let {About} = require('../about/about');
      resolve(About);
    });
  }, name: 'About'}),
  new Route({path: '/login', component: Login, name: 'Login'}),
  new Route({path: '/logout', component: Logout, name: 'Logout'}),
  new Route({path: '/admin/...', component: Admin, name: 'Admin'}),
  new Route({path: '/users/:id/profile', component: UserProfile, name: 'Profile'}),
  new AuxRoute({path: '/modal', component: Modal, name: 'Modal'}),
  new Route({path: '/restricted', component: Restricted, name: 'Restricted'}),
  new Route({path: '/**', component: NotFound})
])
export class App {
  constructor(public router: Router, public auth: Auth) {
  }
}
