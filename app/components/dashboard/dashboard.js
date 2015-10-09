import {Component, View, Injector} from 'angular2/angular2';
import {CanActivate} from 'angular2/router';
import template from './dashboard.html';

@Component({
	selector: 'dashboard'
})
@View({
	template
})
export class Dashboard {
	constructor() {
		
	}
}