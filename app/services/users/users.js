import {Injectable} from 'angular2/angular2';
import {Http} from 'angular2/http';

@Injectable()
export class UserService {
  static parameters = [Http]
  constructor(http) {
    this.http = http;
  }

  getUsers() {
    return this.http.get('./users.json');
  }
}

export const USER_PROVIDERS = [UserService];
