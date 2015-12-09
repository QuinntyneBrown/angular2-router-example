import {Http} from 'angular2/http';

export class Auth {
	static parameters = [Http]
	constructor(http) {
		this.http = http;
		this.user = false;
	}

	login(username, password) {
		return new Promise((resolve, reject) => {
			this.http.get('./users.json')
				.subscribe(res => {
					let users = res.json().results;
					let user = users.filter(({user}) => {
						return username == user.username && password == user.password;
					});

					if (user.length === 1) {
						this.user = user[0].user;
						resolve(this.user);
					} else {
						reject(false);
					}
				});
		});
	}

	check() {
		return new Promise((resolve) => {
			if (this.user) {
				resolve(this.user);
			} else {
				resolve(false);
			}
		});
	}

	logout() {
		this.user = false;
	}
}

export const AUTH_PROVIDERS = [Auth];
