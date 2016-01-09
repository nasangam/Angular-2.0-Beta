import {Injectable} from 'angular2/core';
import {Http,HTTP_BINDINGS, HTTP_PROVIDERS } from 'angular2/Http'

@Injectable()
export class CatalogSvc{
    constructor(public http:Http){
    }
    getCatalog(){
        return this.http.get("data/data.json");
    }
}