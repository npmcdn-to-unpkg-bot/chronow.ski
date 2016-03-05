import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {IndexComponent} from './index';
import {SidebarComponent} from './sidebar';
import {FooterComponent} from './footer';

@Component({
  selector: 'app',
  templateUrl: '/app/templates/app.html',
  directives: [ROUTER_DIRECTIVES, SidebarComponent, FooterComponent]
})


@RouteConfig([
  {path: '/', component: IndexComponent, as: 'Index'}
])

export class AppComponent {
  public title: string = 'Chronowski'
}