import {SCHOOLS} from '../data/schools';

import {Component} from 'angular2/core';

import {School} from '../interfaces/school';

@Component({
  templateUrl: '/app/templates/education.html'
})

export class EducationComponent {
  public page: string = 'Education';

  schools: School[] = SCHOOLS;
}