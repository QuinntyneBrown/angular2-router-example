let loggedIn = false;

export class Auth {
	login(username = '', password = '') {
		return new Promise((resolve, reject) => {
			loggedIn = true;
			resolve(true);
		});
	}

	check() {
		return new Promise((resolve) => {
			resolve(loggedIn);
		});
	}
}

export default [Auth];