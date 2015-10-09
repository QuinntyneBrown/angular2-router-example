import 'babelify/polyfill';
import 'reflect-metadata';
import 'zone.js';
import './config/jquery';
import 'bootstrap';
import {bootstrap, bind} from 'angular2/angular2';
import {ROUTER_BINDINGS, LocationStrategy, HashLocationStrategy, ROUTER_PRIMARY_COMPONENT} from 'angular2/router';
import {FORM_BINDINGS} from 'angular2/angular2';
import {App} from './components/app/app';
import {appInjector} from './helpers/app-injector';
import {Auth} from './services/auth/auth';

bootstrap(App, [
	Auth,
	ROUTER_BINDINGS,
	FORM_BINDINGS,
	bind(LocationStrategy).toClass(HashLocationStrategy),
	bind(ROUTER_PRIMARY_COMPONENT).toValue(App)
]).then((appRef) => {
	appInjector(appRef.injector);
});