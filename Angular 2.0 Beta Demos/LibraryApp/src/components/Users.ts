/**
 * Created by SangamNa on 1/7/2016.
 */
import {Component, View} from 'angular2/core';
import {hyphenSeparatorPipe} from 'app/pipes/hyphenSeparator';
@Component({
  selector: "users"
})
@View({
  template: "<ul><li *ngFor='#user of Users'>{{user | hyphenSeparator}} </li></ul>",
  pipes: [hyphenSeparatorPipe]
})
export class Users {
  Users:Array<string>;
  constructor() {
    this.Users = ["Nag","Raj","CNU"];
  }
}
