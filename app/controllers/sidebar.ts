import {Component} from 'angular2/core';

import {SocialLink} from '../interfaces/sociallink';
import {SocialLinksService} from '../services/sociallinks';

@Component({
  selector: 'app-sidebar',
  templateUrl: '/app/templates/sidebar.html',
  providers: [SocialLinksService]
})

export class SidebarComponent {
  sociallinks: SocialLink[];

  constructor(private _socialLinksService: SocialLinksService) {
    this.sociallinks = this._socialLinksService.getSocialLinks();
  }
}