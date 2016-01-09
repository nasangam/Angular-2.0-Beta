import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import {Component, View} from 'angular2/core';
import {Catalog} from 'app/components/Catalog';
import {Users} from 'app/components/Users';

@RouteConfig([
    { path: '/users', name: 'Users',  component: Users , useAsDefault: true},
    { path: '/catalog', name:'Catalog', component: Catalog }
])
@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: "./Templates/App.html"
})
export class App{

}