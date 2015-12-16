import 'babelify/polyfill';
window['jQuery'] = window['$'] = require('jquery');
import 'rxjs';
import 'bootstrap';
import {bootstrap} from 'angular2/platform/browser';
import {ComponentRef, PLATFORM_DIRECTIVES, provide} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from 'angular2/router';

import {App} from './components/app/app';
import {appInjector} from './helpers/app-injector';
import {AUTH_PROVIDERS} from './services/auth/auth';
import {USER_PROVIDERS} from './services/users/users';

bootstrap(App, [
	AUTH_PROVIDERS,
	USER_PROVIDERS,
	HTTP_PROVIDERS,
	ROUTER_PROVIDERS,
	provide(PLATFORM_DIRECTIVES, {useValue: [ROUTER_DIRECTIVES], multi:true})
]).then((appRef: ComponentRef) => {
	appInjector(appRef.injector);
});
