import 'babelify/polyfill';
import 'reflect-metadata';
import 'zone.js';
import './config/jquery';
import 'bootstrap';
import {bootstrap} from 'angular2/angular2';
import {bind} from 'angular2/angular2';
import {ROUTER_BINDINGS, ROUTER_PRIMARY_COMPONENT, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {FORM_BINDINGS} from 'angular2/angular2';
import {App} from './components/app/app';

bootstrap(App, [
	ROUTER_BINDINGS,
	FORM_BINDINGS,
	bind(LocationStrategy).toClass(HashLocationStrategy),
	bind(ROUTER_PRIMARY_COMPONENT).toValue(App)
]);