System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var FooterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FooterComponent = (function () {
                function FooterComponent() {
                    this.sociallinks = [
                        { "name": "Facebook", "icon": "facebook", "url": "https://facebook.com/kuba77" },
                        { "name": "VKontakte", "icon": "vk", "url": "https://vk.com/chronowski" },
                        { "name": "LinkedIn", "icon": "linkedin", "url": "https://linkedin.com/pub/jakub-chronowski/109/80a/810" },
                        { "name": "Twitter", "icon": "twitter", "url": "https://twitter.com/jakubchronowski" },
                        { "name": "Instagram", "icon": "instagram", "url": "https://instagram.com/19kuba22" },
                        { "name": "GitHub", "icon": "github", "url": "https://github.com/Kuba77" },
                    ];
                }
                FooterComponent = __decorate([
                    core_1.Component({
                        selector: 'app-footer',
                        templateUrl: '/app/templates/footer.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], FooterComponent);
                return FooterComponent;
            }());
            exports_1("FooterComponent", FooterComponent);
        }
    }
});
//# sourceMappingURL=footer.js.map