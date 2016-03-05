import {Component} from 'angular2/core';

@Component({
  templateUrl: '/app/templates/index.html'
})

export class IndexComponent {
  public page: string = 'Index';

  playName() {
    var audio = new Audio('/assets/jakub.ogg');
    audio.play();
  }
}