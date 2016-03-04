import { Component, OnInit } from 'angular2/core';
import {IndexComponent} from './index';
import {FooterComponent} from './footer';

import {SocialLink} from '../interfaces/sociallink';
import {SocialLinksService} from '../services/sociallinks';

@Component({
  selector: 'app',
  templateUrl: '/app/templates/app.html',
  directives: [IndexComponent, FooterComponent],
  providers: [SocialLinksService]
})

export class AppComponent {
  sociallinks: SocialLink[];

  constructor(private _socialLinksService: SocialLinksService) {
    this.sociallinks = this._socialLinksService.getSocialLinks();
  }

  public title: string = 'Chronowski'
}