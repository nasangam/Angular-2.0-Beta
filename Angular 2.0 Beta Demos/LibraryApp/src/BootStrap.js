var browser_1 = require('angular2/platform/browser');
var http_1 = require('angular2/http');
var router_1 = require("angular2/router");
var CatalogSvc_1 = require('app/services/CatalogSvc');
var App_1 = require('app/components/App');
browser_1.bootstrap(App_1.App, [CatalogSvc_1.CatalogSvc, router_1.ROUTER_DIRECTIVES, router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS]);
