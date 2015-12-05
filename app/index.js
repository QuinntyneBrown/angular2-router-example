import 'babelify/polyfill';
import 'reflect-metadata';
import 'zone.js';
import './config/jquery';
import 'bootstrap';
import {bootstrap} from 'angular2/angular2';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/angular2';
import {App} from './components/app/app';
import {appInjector} from './helpers/app-injector';
import {Auth} from './services/auth/auth';

bootstrap(App, [
	Auth,
	ROUTER_PROVIDERS,
	FORM_PROVIDERS
]).then((appRef) => {
	appInjector(appRef.injector);
});
