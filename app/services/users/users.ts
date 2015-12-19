import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class UserService {
  constructor(public http: Http) {}

  getUsers() {
    return this.http.get('./users.json')
      .map(data => data.json())
      .map(data => data.results)
      .map(data => data.map(item => item.user));
  }
}

export const USER_PROVIDERS = [UserService];
