import {Component, View} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';
import {Home} from '../home/home';
import {About} from '../about/about';
import {Login} from '../login/login';
import {Logout} from '../logout/logout';
import {Admin} from '../admin/admin';
import {NotFound} from '../notfound/notfound';
import {Loading} from '../loading/loading';
import {Auth} from '../../services/auth/auth';
import {Users} from '../users/users';
let template = require('./app.html');

@Component({
  selector: 'app',
  template,
  directives: [Loading]
})
@RouteConfig([
  {
    path: '/',
    component: Home,
    name: 'Home'
  },
  {
    path: '/about',
    component: About,
    name: 'About'
  },
  {
    path: '/users',
    component: Users,
    name: 'Users'
  },
  {
    path: '/login',
    component: Login,
    name: 'Login'
  },
  {
    path: '/logout',
    component: Logout,
    name: 'Logout'
  },
  {
    path: '/admin/...',
    component: Admin,
    name: 'Admin'
  },
  {
    path: '/**',
    component: NotFound
  }
])
export class App {
  constructor(public router: Router, public auth: Auth) {
  }
}
