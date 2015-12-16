import {Component, View, Injector} from 'angular2/core';
import {CanActivate} from 'angular2/router';
let template = require('./dashboard.html');

@Component({
	selector: 'dashboard',
	template
})
export class Dashboard {
}
