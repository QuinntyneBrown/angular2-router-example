import 'babelify/polyfill';
import 'reflect-metadata';
import 'zone.js';
import './config/jquery';
import 'bootstrap';
import {bootstrap} from 'angular2/angular2';
import {bind} from 'angular2/di';
import {ROUTER_BINDINGS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {FORM_BINDINGS} from 'angular2/forms';
import {App} from './components/app/app';

bootstrap(App, [
	ROUTER_BINDINGS,
	FORM_BINDINGS,
	bind(LocationStrategy).toClass(HashLocationStrategy)
]);