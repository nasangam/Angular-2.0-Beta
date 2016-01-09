var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var router_1 = require('angular2/router');
var core_1 = require('angular2/core');
var Catalog_1 = require('app/components/Catalog');
var Users_1 = require('app/components/Users');
var App = (function () {
    function App() {
    }
    App = __decorate([
        router_1.RouteConfig([
            { path: '/users', name: 'Users', component: Users_1.Users, useAsDefault: true },
            { path: '/catalog', name: 'Catalog', component: Catalog_1.Catalog }
        ]),
        core_1.Component({
            selector: 'app',
            directives: [router_1.ROUTER_DIRECTIVES],
            templateUrl: "./Templates/App.html"
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
exports.App = App;
