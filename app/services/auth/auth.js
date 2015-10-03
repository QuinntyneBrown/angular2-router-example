let loggedIn = false;

export class Auth {
	login(username = '', password = '') {
		return new Promise((resolve, reject) => {
			loggedIn = true;
			resolve(true);
		});
	}

	check() {
		return loggedIn;
	}
}

export default [Auth];