/**
 * Created by SangamNa on 1/7/2016.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var CatalogSvc_1 = require('app/services/CatalogSvc');
var Catalog = (function () {
    function Catalog(catalogSvc) {
        var _this = this;
        catalogSvc.getCatalog().subscribe(function (res) { return _this.Items = res.json(); }, function (err) { return console.log("error"); });
        this.newItem = "new Item - React";
    }
    Catalog = __decorate([
        core_1.Component({
            selector: "catalog"
        }),
        core_1.View({
            template: "<ul><li *ngFor='#Item of Items'>{{Item}} </li></ul><br/><input type='text' [value]='newItem' (keyup)='newItem=$event.target.value' /> <br/>{{newItem}} <br/><button (click)='newItem=\"\"'>clear</button><button (click)='Items.push(newItem)'>Add</button>"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof CatalogSvc_1.CatalogSvc !== 'undefined' && CatalogSvc_1.CatalogSvc) === 'function' && _a) || Object])
    ], Catalog);
    return Catalog;
    var _a;
})();
exports.Catalog = Catalog;
