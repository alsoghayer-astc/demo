import { Component,ViewChild } from '@angular/core';
import {TransactionService,BackboneService,ModelService} from './service';
import {SlotType,GM_PointSlot} from './slot';
import {} from 'googlemaps';
import * as xmlbuilder from 'xmlbuilder';

const MODEL_URN = "urn:demo:def:objectType:avl:";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'INdicio';
  constructor(private _modelService:ModelService,private _transaction:TransactionService,private _backbone:BackboneService){}

  ngOnInit(){
    console.log('hello there')
    this._modelService.getAllModels().subscribe(i=>console.log('model found .. ',i))
    //this._backbone.getDataTypes().subscribe(i=>console.log('dataTypes',i));
    // let slot = {name:'SomeSlot',type:SlotType.String,value:"AbuDa7em"};
    // this.test.insert('urn:demo:def:objectType:avl:Driver',[{lang:'ar-SA',value:'اسم عربي'},{lang:'en-US',value:'English Name'}],[slot]);
  }
}