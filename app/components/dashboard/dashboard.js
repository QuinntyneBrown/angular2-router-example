import {Component, View, Injector} from 'angular2/angular2';
import {CanActivate} from 'angular2/router';
import template from './dashboard.html';
import {Auth} from '../../services/auth/auth';

@Component({
	selector: 'dashboard'
})
@View({
	template
})
@CanActivate(() => {
	let injector = Injector.resolveAndCreate([
		Auth
	]);

	let auth = injector.get(Auth);

  	return auth.check();
})
export class Dashboard {
	constructor() {
		
	}
}