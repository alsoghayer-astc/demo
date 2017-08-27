import { Component,ViewChild } from '@angular/core';
import {TransactionService,BackboneService} from './service';
import {SlotType,GM_PointSlot} from './slot';
import {} from 'googlemaps';
import * as xmlbuilder from 'xmlbuilder';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'INdicio';
  @ViewChild('mapHolder') mapHolder;

  constructor(private test:TransactionService,private _backbone:BackboneService){}

  ngOnInit(){
    // this._backbone.getDataTypes().subscribe(i=>console.log('dataTypes',i));
    // let slot = {name:'SomeSlot',type:SlotType.String,value:"AbuDa7em"};
    // this.test.insert('urn:demo:def:objectType:avl:Driver',[{lang:'ar-SA',value:'اسم عربي'},{lang:'en-US',value:'English Name'}],[slot]);
    this.initMap();
  }
  initMap(){
    console.log(this.mapHolder)
    var map = new google.maps.Map(this.mapHolder.nativeElement, {
      center: {lat: 24.8043617, lng: 46.6573563},
      zoom: 16
    });
    let marker = new google.maps.Marker({
      position:{lat: 24.805024, lng: 46.656291},
      map:map
    });
  }
}