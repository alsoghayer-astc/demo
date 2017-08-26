import { Component } from '@angular/core';
import {TransactionService} from './service';
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
  constructor(private test:TransactionService){
    let b = GM_PointSlot;

    let slot = {name:'SomeSlot',type:SlotType.String,value:"AbuDa7em"};

    test.insert('urn:auth:def:objectType:222:Vehicle3',[{lang:'ar-SA',value:'اسم عربي'},{lang:'en-US',value:'English Name'}],[slot]);
  }
}