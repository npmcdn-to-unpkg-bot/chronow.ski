import {PROJECTS} from '../data/projects';

import {Component} from 'angular2/core';

import {Project} from '../interfaces/project';

@Component({
  templateUrl: '/app/templates/experience.html'
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
        if (this.languages.indexOf(language) == -1) { this.languages.push(language); }
      }

      for (var framework of project.frameworks) {
        if (this.frameworks.indexOf(framework) == -1) { this.frameworks.push(framework); }
      }
    }
  }

  applyFilter($event, language: string, framework: string) {
    $event.preventDefault();
    $event.stopPropagation();
    
    this.active_language = language;
    this.active_framework = framework;
  }

  checkFilter(project) {
    if (this.active_language != '') { return project.languages.indexOf(this.active_language) > -1; }
    if (this.active_framework != '') { return project.frameworks.indexOf(this.active_framework) > -1; }
    return true;
  }
}