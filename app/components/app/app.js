import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {Home} from '../home/home';
import {About} from '../about/about';
import {Login} from '../login/login';
import {Admin} from '../admin/admin';
import {NotFound} from '../notfound/notfound';
import {Loading} from '../loading/loading';
import template from './app.html';

@Component({
  selector: 'app',
  template,
  directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES, Loading]
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
    path: '/login',
    component: Login,
    name: 'Login'
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
  static parameters = [Router]
  constructor(router) {
    this.router = router;
  }
}
