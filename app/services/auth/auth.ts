import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class Auth {
	user: any = false;
	isAdmin: boolean = false;
	constructor(public http: Http) {}

	login(username, password) {
		return new Promise((resolve, reject) => {
			this.http.get('./users.json')
				.map((res: any) => res.json().results)
				.subscribe((users: any) => {
					let user = users.filter(({user}) => {
						return (username == user.username && password == user.password);
					});

					if (user.length === 1) {
						this.user = user[0].user;

						// Stub to add an admin flag for this user
						if (this.user.username == 'redcat594') {
							this.isAdmin = true;
						}

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
		this.isAdmin = false;
	}
}

export const AUTH_PROVIDERS = [Auth];
