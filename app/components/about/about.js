import {Component, View} from 'angular2/angular2';
import {CanActivate} from 'angular2/router';
import template from './about.html';

@Component({
  selector: 'about'
})
@View({
  template
})
@CanActivate(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), 3000);
  });
})
export class About {
}

