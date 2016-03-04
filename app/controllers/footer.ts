import {Component} from 'angular2/core';
import {SocialLink} from '../interfaces/sociallink';

@Component({
  selector: 'app-footer',
  templateUrl: '/app/templates/footer.html',
})

export class FooterComponent {
  public sociallinks: SocialLink[] = [
    { "name": "Facebook", "icon": "facebook", "url": "https://facebook.com/kuba77" },
    { "name": "VKontakte", "icon": "vk", "url": "https://vk.com/chronowski" },
    { "name": "LinkedIn", "icon": "linkedin", "url": "https://linkedin.com/pub/jakub-chronowski/109/80a/810" },
    { "name": "Twitter", "icon": "twitter", "url": "https://twitter.com/jakubchronowski" },
    { "name": "Instagram", "icon": "instagram", "url": "https://instagram.com/19kuba22" },
    { "name": "GitHub", "icon": "github", "url": "https://github.com/Kuba77" },
  ]
}