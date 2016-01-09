/**
 * Created by SangamNa on 1/7/2016.
 */

import {Component, View} from 'angular2/core';
import {CatalogSvc} from 'app/services/CatalogSvc';
@Component({
  selector: "catalog"
})
@View({
  template: "<ul><li *ngFor='#Item of Items'>{{Item}} </li></ul><br/><input type='text' [value]='newItem' (keyup)='newItem=$event.target.value' /> <br/>{{newItem}} <br/><button (click)='newItem=\"\"'>clear</button><button (click)='Items.push(newItem)'>Add</button>"
})
export class Catalog {
  Items:Array<string>;
  newItem:String;
  constructor(catalogSvc:CatalogSvc) {
    catalogSvc.getCatalog().subscribe(res=>this.Items= res.json(), err=>console.log("error"));
    this.newItem = "new Item - React";
  }
}
