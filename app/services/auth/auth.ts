import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class Auth {
	user: any;
	constructor(public http: Http) {
		this.user = false;
	}

	login(username, password) {
		return new Promise((resolve, reject) => {
			this.http.get('./users.json')
				.map((res: any) => res.json().results)
				.subscribe((users: any) => {
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
