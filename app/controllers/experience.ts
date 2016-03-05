import {PROJECTS} from '../data/projects';

import {Component} from 'angular2/core';

import {Project} from '../interfaces/project';


@Component({
  templateUrl: '/app/templates/experience.html'
})

export class ExperienceComponent {
  projects: Project[] = PROJECTS;
}