require('babelify/polyfill');
require('reflect-metadata');
window['jQuery'] = window['$'] = require('jquery');
require('zone.js');
require('rxjs/add/operator/map.js');
require('bootstrap');
var angular2_1 = require('angular2/angular2');
var http_1 = require('angular2/http');
var router_1 = require('angular2/router');
var angular2_2 = require('angular2/angular2');
var app_1 = require('./components/app/app');
var app_injector_1 = require('./helpers/app-injector');
var auth_1 = require('./services/auth/auth');
var users_1 = require('./services/users/users');
angular2_1.bootstrap(app_1.App, [
    auth_1.AUTH_PROVIDERS,
    users_1.USER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    router_1.ROUTER_PROVIDERS,
    angular2_2.FORM_PROVIDERS
]).then(function (appRef) {
    app_injector_1.appInjector(appRef.injector);
});
//# sourceMappingURL=index.js.map