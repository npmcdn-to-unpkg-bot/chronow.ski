System.register(['../data/projects', 'angular2/core', '../pipes/projectfilter'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var projects_1, core_1, projectfilter_1;
    var ExperienceComponent;
    return {
        setters:[
            function (projects_1_1) {
                projects_1 = projects_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (projectfilter_1_1) {
                projectfilter_1 = projectfilter_1_1;
            }],
        execute: function() {
            ExperienceComponent = (function () {
                function ExperienceComponent() {
                    this.page = 'Experience';
                    this.active_language = '';
                    this.active_framework = '';
                    this.languages = [];
                    this.frameworks = [];
                    this.projects = projects_1.PROJECTS;
                    for (var _i = 0, _a = this.projects; _i < _a.length; _i++) {
                        var project = _a[_i];
                        for (var _b = 0, _c = project.languages; _b < _c.length; _b++) {
                            var language = _c[_b];
                            if (this.languages.indexOf(language) == -1) {
                                this.languages.push(language);
                            }
                        }
                        for (var _d = 0, _e = project.frameworks; _d < _e.length; _d++) {
                            var framework = _e[_d];
                            if (this.frameworks.indexOf(framework) == -1) {
                                this.frameworks.push(framework);
                            }
                        }
                    }
                }
                ExperienceComponent.prototype.apply_filter = function ($event, language, framework) {
                    $event.preventDefault();
                    $event.stopPropagation();
                    this.active_language = language;
                    this.active_framework = framework;
                };
                ExperienceComponent = __decorate([
                    core_1.Component({
                        templateUrl: '/app/templates/experience.html',
                        pipes: [projectfilter_1.ProjectFilterPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ExperienceComponent);
                return ExperienceComponent;
            }());
            exports_1("ExperienceComponent", ExperienceComponent);
        }
    }
});
//# sourceMappingURL=experience.js.map