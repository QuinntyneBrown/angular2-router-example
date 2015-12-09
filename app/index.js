import 'babelify/polyfill';
import 'reflect-metadata';
import 'zone.js';
import 'rxjs/operator/map';
import './config/jquery';
import 'bootstrap';
import {bootstrap} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/angular2';

import {App} from './components/app/app';
import {appInjector} from './helpers/app-injector';
import {AUTH_PROVIDERS} from './services/auth/auth';
import {USER_PROVIDERS} from './services/users/users';

bootstrap(App, [
	AUTH_PROVIDERS,
	USER_PROVIDERS,
	HTTP_PROVIDERS,
	ROUTER_PROVIDERS,
	FORM_PROVIDERS
]).then((appRef) => {
	appInjector(appRef.injector);
});
