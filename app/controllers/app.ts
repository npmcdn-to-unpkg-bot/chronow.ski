import { Component, OnInit } from 'angular2/core';
import {IndexComponent} from './index';
import {SidebarComponent} from './sidebar';
import {FooterComponent} from './footer';

@Component({
  selector: 'app',
  templateUrl: '/app/templates/app.html',
  directives: [IndexComponent, SidebarComponent, FooterComponent]
})

export class AppComponent {
  public title: string = 'Chronowski'
}