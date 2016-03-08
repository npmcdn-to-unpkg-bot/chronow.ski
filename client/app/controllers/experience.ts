import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

import {Project} from '../interfaces/project';

@Component({
  templateUrl: '/app/templates/experience.html',
  providers: [HTTP_PROVIDERS]
})

export class ExperienceComponent {
  public page: string = 'Experience';
  public active_language: string = '';
  public active_technology: string = '';
  public languages: string[] = [];
  public stack: string[] = [];

  projects: Project[];

  constructor(http: Http) {
    http.get('/api/projects/').subscribe(projects => {
      this.projects = projects.json()
      for (var project of this.projects) {
        for (var language of project.languages) {
          if (this.languages.indexOf(language) == -1) { this.languages.push(language); }
        }

        for (var technology of project.stack) {
          if (this.stack.indexOf(technology) == -1) { this.stack.push(technology); }
        }
      }
    });
  }

  applyFilter($event, language: string, technology: string) {
    $event.preventDefault();
    $event.stopPropagation();
    
    if (this.active_language != '' && this.active_language == language) {
      this.active_language = '';
    }
    else if (this.active_technology != '' && this.active_technology == technology) {
      this.active_technology = '';
    }
    else {
      this.active_language = language;
      this.active_technology = technology;
    }
  }

  checkFilter(project) {
    if (this.active_language != '') { return project.languages.indexOf(this.active_language) > -1; }
    if (this.active_technology != '') { return project.stack.indexOf(this.active_technology) > -1; }
    return true;
  }
}