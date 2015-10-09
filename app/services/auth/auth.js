let loggedIn = false;

export class Auth {
	login(username = '', password = '') {
		return new Promise((resolve, reject) => {
			loggedIn = true;
			resolve(true);
		});
	}

	check() {
		return new Promise((resolve, reject) => {
			if (loggedIn) {
				return resolve(true);
			} else {
				return reject(false);
			}
		});
	}
}

export default [Auth];