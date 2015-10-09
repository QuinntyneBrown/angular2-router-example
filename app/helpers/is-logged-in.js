import {appInjector} from './app-injector';
import {Auth} from '../services/auth/auth';
import {Router} from 'angular2/router';

export const isLoggedIn = () => {
	let injector = appInjector();
	let auth = injector.get(Auth);
	let router = injector.get(Router);

  	return auth.check()
  				.then((result) => result)
  				.catch(() => {
  					router.navigate(['/Login']);
  					return false;
  				});
};