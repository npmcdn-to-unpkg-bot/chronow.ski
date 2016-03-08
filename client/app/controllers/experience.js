System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var ExperienceComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            ExperienceComponent = (function () {
                function ExperienceComponent(http) {
                    var _this = this;
                    this.page = 'Experience';
                    this.active_language = '';
                    this.active_technology = '';
                    this.languages = [];
                    this.stack = [];
                    http.get('/api/projects/').subscribe(function (projects) {
                        _this.projects = projects.json();
                        for (var _i = 0, _a = _this.projects; _i < _a.length; _i++) {
                            var project = _a[_i];
                            for (var _b = 0, _c = project.languages; _b < _c.length; _b++) {
                                var language = _c[_b];
                                if (_this.languages.indexOf(language) == -1) {
                                    _this.languages.push(language);
                                }
                            }
                            for (var _d = 0, _e = project.stack; _d < _e.length; _d++) {
                                var technology = _e[_d];
                                if (_this.stack.indexOf(technology) == -1) {
                                    _this.stack.push(technology);
                                }
                            }
                        }
                    });
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
                        templateUrl: '/app/templates/experience.html',
                        providers: [http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ExperienceComponent);
                return ExperienceComponent;
            }());
            exports_1("ExperienceComponent", ExperienceComponent);
        }
    }
});
//# sourceMappingURL=experience.js.map