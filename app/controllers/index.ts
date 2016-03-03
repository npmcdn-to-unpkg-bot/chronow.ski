import { Component } from 'angular2/core';
import {FooterComponent} from './footer';

@Component({
  selector: 'app',
  templateUrl: '/app/templates/index.html',
  directives: [FooterComponent]
})

export class IndexComponent {
  public title: string = 'Chronow.ski'
}