import {Component} from 'angular2/core';
import {RouteConfig, Route} from 'angular2/router';

import {Home} from './Home';
let template = require('./users.html');

@Component({
  selector: 'users',
  template
})
@RouteConfig([
  new Route({path: '/', component: Home, name: 'Home', useAsDefault: true})
])
export class Users {

}
