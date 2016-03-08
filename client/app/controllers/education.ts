import {SCHOOLS} from '../data/schools';

import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

import {School} from '../interfaces/school';
import {Certificate} from '../interfaces/certificate';

@Component({
  templateUrl: '/app/templates/education.html'
})

export class EducationComponent {
  public page: string = 'Education';

  schools: School[] = SCHOOLS;

  certificates: Certificate[];

  constructor(http: Http) {
    http.get('/api/certificates/').subscribe(certificates => {
      this.certificates = certificates.json()
    });
  }
}