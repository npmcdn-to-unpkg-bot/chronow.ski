import {Component, View} from 'angular2/core';

@Component({
  selector: 'my-app'
})

@View({
  templateUrl: '/app/templates/index.html'
})

export class IndexComponent {
  title: string;

  constructor() {
    this.title = 'Chronow.ski';
  }
}