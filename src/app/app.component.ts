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
  
  constructor(private test:TransactionService,private _backbone:BackboneService){}

  ngOnInit(){
    this._backbone.getDataTypes().subscribe(i=>console.log('dataTypes',i));
    let slot = {name:'SomeSlot',type:SlotType.String,value:"AbuDa7em"};
    this.test.insert('urn:demo:def:objectType:avl:Driver',[{lang:'ar-SA',value:'اسم عربي'},{lang:'en-US',value:'English Name'}],[slot]);
  }
}