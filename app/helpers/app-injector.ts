import {Injector} from 'angular2/angular2';

let appInjectorRef: Injector;
export const appInjector = (injector?: Injector) => {
	if (!injector) {
		return appInjectorRef;
	}

	appInjectorRef = injector;

	return appInjectorRef;
};
