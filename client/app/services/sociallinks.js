System.register(['../data/sociallinks', 'angular2/core'], function(exports_1, context_1) {
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
    var sociallinks_1, core_1;
    var SocialLinksService;
    return {
        setters:[
            function (sociallinks_1_1) {
                sociallinks_1 = sociallinks_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SocialLinksService = (function () {
                function SocialLinksService() {
                }
                SocialLinksService.prototype.getSocialLinks = function () {
                    return sociallinks_1.SOCIALLINKS;
                };
                SocialLinksService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], SocialLinksService);
                return SocialLinksService;
            }());
            exports_1("SocialLinksService", SocialLinksService);
        }
    }
});
//# sourceMappingURL=sociallinks.js.map