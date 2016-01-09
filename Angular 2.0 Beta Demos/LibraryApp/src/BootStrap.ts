import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from "angular2/router";
import {CatalogSvc} from 'app/services/CatalogSvc';
import {App} from 'app/components/App';

bootstrap(App,[CatalogSvc,ROUTER_DIRECTIVES,ROUTER_PROVIDERS,HTTP_PROVIDERS]);