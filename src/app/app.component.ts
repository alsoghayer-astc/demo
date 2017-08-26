import { Component } from '@angular/core';
import {TransactionService,BackboneService} from './service';
import {SlotType,GM_PointSlot} from './slot';
import * as xmlbuilder from 'xmlbuilder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'INdicio';
  a:XMLSerializer;
  b:XMLDocument;
  constructor(private test:TransactionService,private _backbone:BackboneService){
  }

  ngOnInit(){
    console.log(this._backbone.getDataTypes().subscribe());
    let slot = {name:'SomeSlot',type:SlotType.String,value:"AbuDa7em"};
    this.test.insert('urn:auth:def:objectType:222:Vehicle3',[{lang:'ar-SA',value:'اسم عربي'},{lang:'en-US',value:'English Name'}],[slot]);
  }
}