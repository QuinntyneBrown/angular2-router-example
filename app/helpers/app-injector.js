let appInjectorRef;

export const appInjector = (injector = false) => {
	if (!injector) {
		return appInjectorRef;
	}

	appInjectorRef = injector;

	return appInjectorRef;
};