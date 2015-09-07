import {Component, View, bind} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Home} from '../home/home';
import {About} from '../about/about';
import {Login, SetFoo} from '../login/login';
import {Admin} from '../admin/admin';
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
    as: 'home'
  },
  {
    path: '/about',
    component: About,
    as: 'about'
  },
  {
    path: '/login',
    component: {
      type: 'loader',
      loader: () => new Promise((resolve, reject) => {
        resolve(Login);
      })
    },
    as: 'login'
  },
  {
    path: '/admin/...',
    component: Admin,
    as: 'admin'
  }
])
export class App {}