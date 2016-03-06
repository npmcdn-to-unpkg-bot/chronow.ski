import {PROJECTS} from '../data/projects';

import {Component} from 'angular2/core';

import {Project} from '../interfaces/project';
import {ProjectFilterPipe} from '../pipes/projectfilter';

@Component({
  templateUrl: '/app/templates/experience.html',
  pipes: [ProjectFilterPipe]
})

export class ExperienceComponent {
  public page: string = 'Experience';
  public active_language: string = '';
  public active_framework: string = '';
  public languages: string[] = [];
  public frameworks: string[] = [];

  projects: Project[] = PROJECTS;

  constructor() {
    for (var project of this.projects) {
      for (var language of project.languages) {
        if (this.languages.indexOf(language) == -1) {
          this.languages.push(language);
        }
      }

      for (var framework of project.frameworks) {
        if (this.frameworks.indexOf(framework) == -1) {
          this.frameworks.push(framework);
        }
      }
    }
  }

  apply_filter($event, language: string, framework: string) {
    $event.preventDefault();
    $event.stopPropagation();
    
    this.active_language = language;
    this.active_framework = framework;
  }
}