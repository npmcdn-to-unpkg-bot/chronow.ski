import {Component} from 'angular2/core';

import {SocialLink} from '../interfaces/sociallink';
import {SocialLinksService} from '../services/sociallinks';

@Component({
  selector: 'app-footer',
  templateUrl: '/app/templates/footer.html',
  providers: [SocialLinksService]
})

export class FooterComponent {
  sociallinks: SocialLink[];

  constructor(private _socialLinksService: SocialLinksService) {
    this.sociallinks = this._socialLinksService.getSocialLinks();
  }
}