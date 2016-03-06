import {SCHOOLS} from '../data/schools';
import {CERTIFICATES} from '../data/certificates';

import {Component} from 'angular2/core';

import {School} from '../interfaces/school';
import {Certificate} from '../interfaces/certificate';

@Component({
  templateUrl: '/app/templates/education.html'
})

export class EducationComponent {
  public page: string = 'Education';

  schools: School[] = SCHOOLS;
  certificates: Certificate[] = CERTIFICATES;
}