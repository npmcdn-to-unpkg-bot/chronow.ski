System.register(['../data/schools', 'angular2/core', 'angular2/http'], function(exports_1, context_1) {
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
    var schools_1, core_1, http_1;
    var EducationComponent;
    return {
        setters:[
            function (schools_1_1) {
                schools_1 = schools_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            EducationComponent = (function () {
                function EducationComponent(http) {
                    var _this = this;
                    this.page = 'Education';
                    this.schools = schools_1.SCHOOLS;
                    http.get('/api/certificates/').subscribe(function (certificates) {
                        _this.certificates = certificates.json();
                    });
                }
                EducationComponent = __decorate([
                    core_1.Component({
                        templateUrl: '/app/templates/education.html'
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], EducationComponent);
                return EducationComponent;
            }());
            exports_1("EducationComponent", EducationComponent);
        }
    }
});
//# sourceMappingURL=education.js.map