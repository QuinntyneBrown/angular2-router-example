import {Component, View, bind} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Home} from '../home/home';
import {About} from '../about/about';
import {Login} from '../login/login';
import {Admin} from '../admin/admin';
import {NotFound} from '../notfound/notfound';
import template from './app.html';
import authBindings from '../../services/auth/auth';

@Component({
  selector: 'app'
})
@View({
  template,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {
    path: '/',
    component: Home,
    as: 'Home'
  },
  {
    path: '/about',
    component: About,
    as: 'About'
  },
  {
    path: '/login',
    component: Login,
    as: 'Login'
  },
  {
    path: '/admin/...',
    component: Admin,
    as: 'Admin'
  },
  {
    path: '/**',
    component: NotFound
  }
])
export class App {}