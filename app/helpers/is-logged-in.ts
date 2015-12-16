import {Injector} from 'angular2/core';
import {appInjector} from './app-injector';
import {Auth} from '../services/auth/auth';
import {Router} from 'angular2/router';

export const isLoggedIn = () => {
	let injector: Injector = appInjector();
	let auth: Auth = injector.get(Auth);
	let router: Router = injector.get(Router);

  	return auth.check()
  				.then((result) => {
  					if (result) {
  						return true;
  					} else {
  						router.navigate(['/Login']);
  						return false;
  					}
  				});
};
