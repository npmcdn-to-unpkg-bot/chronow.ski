System.register(['../data/projects', 'angular2/core'], function(exports_1, context_1) {
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
    var projects_1, core_1;
    var ExperienceComponent;
    return {
        setters:[
            function (projects_1_1) {
                projects_1 = projects_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ExperienceComponent = (function () {
                function ExperienceComponent() {
                    this.page = 'Experience';
                    this.active_language = '';
                    this.active_technology = '';
                    this.languages = [];
                    this.stack = [];
                    this.projects = projects_1.PROJECTS;
                    for (var _i = 0, _a = this.projects; _i < _a.length; _i++) {
                        var project = _a[_i];
                        for (var _b = 0, _c = project.languages; _b < _c.length; _b++) {
                            var language = _c[_b];
                            if (this.languages.indexOf(language) == -1) {
                                this.languages.push(language);
                            }
                        }
                        for (var _d = 0, _e = project.stack; _d < _e.length; _d++) {
                            var technology = _e[_d];
                            if (this.stack.indexOf(technology) == -1) {
                                this.stack.push(technology);
                            }
                        }
                    }
                }
                ExperienceComponent.prototype.applyFilter = function ($event, language, technology) {
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
                };
                ExperienceComponent.prototype.checkFilter = function (project) {
                    if (this.active_language != '') {
                        return project.languages.indexOf(this.active_language) > -1;
                    }
                    if (this.active_technology != '') {
                        return project.stack.indexOf(this.active_technology) > -1;
                    }
                    return true;
                };
                ExperienceComponent = __decorate([
                    core_1.Component({
                        templateUrl: '/app/templates/experience.html'
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