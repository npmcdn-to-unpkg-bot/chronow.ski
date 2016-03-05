import {SOCIALLINKS} from '../data/sociallinks';

import {Injectable} from 'angular2/core';

@Injectable()
export class SocialLinksService {
  getSocialLinks() {
    return SOCIALLINKS;
  }
}