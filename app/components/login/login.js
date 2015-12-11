var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var angular2_2 = require('angular2/angular2');
var angular2_3 = require('angular2/angular2');
var template = require('./login.html');
var auth_1 = require('../../services/auth/auth');
var Login = (function () {
    function Login(Auth) {
        this.Auth = Auth;
        this.loggedIn = false;
        this.invalid = false;
    }
    Login.prototype.routerOnActivate = function () {
        var _this = this;
        this.Auth.check()
            .then(function (result) {
            _this.loggedIn = result;
        })
            .catch(function () {
            _this.loggedIn = false;
        });
    };
    Login.prototype.login = function (formModel) {
        var _this = this;
        this.invalid = false;
        this.Auth.login(formModel.credentials.username, formModel.credentials.password)
            .then(function () { return _this.loggedIn = true; })
            .catch(function (e) {
            _this.invalid = true;
        });
    };
    Login = __decorate([
        angular2_1.Component({
            selector: 'login-form',
            directives: [angular2_2.FORM_DIRECTIVES, angular2_3.NgIf],
            template: template
        }), 
        __metadata('design:paramtypes', [auth_1.Auth])
    ], Login);
    return Login;
})();
exports.Login = Login;
//# sourceMappingURL=login.js.map