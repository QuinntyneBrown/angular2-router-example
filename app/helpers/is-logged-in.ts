import {Injector} from 'angular2/core';
import {appInjector} from './app-injector';
import {Auth} from '../services/auth/auth';
import {Router, RouteParams} from 'angular2/router';

export const isLoggedIn = () => {
	let injector: Injector = appInjector();
	let auth: Auth = injector.get(Auth);
	let router: Router = injector.get(Router);
	let params: RouteParams = injector.get(RouteParams);

  	return auth.check()
  				.then((result) => {
  					if (result) {
  						return true;
  					} else {
  						router.navigate(['/Login', {target: params.get('target')}]);
  						return false;
  					}
  				});
};

export const isAdmin = (target: string) => {
	let injector: Injector = appInjector();
	let auth: Auth = injector.get(Auth);
	let router: Router = injector.get(Router);

  return auth.check()
  				.then((result) => {
  					if (result) {
							if (!auth.isAdmin) {
								router.navigateByInstruction(router.generate(['/Restricted']), true);
								return false;
							}

  						return true;
  					} else {
							router.navigate(['/Login', {target}]);
  						return false;
  					}
  				});
};
