import { Component, OnInit } from 'angular2/core';
import {FooterComponent} from './footer';

@Component({
  selector: 'app',
  templateUrl: '/app/templates/index.html',
  directives: [FooterComponent]
})

export class IndexComponent {
  public title: string = 'Chronow.ski'

  playName() {
    var audio = new Audio('/assets/jakub.ogg');
    audio.play();
  }
}