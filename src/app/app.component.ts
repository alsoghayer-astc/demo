import { Component,ViewChild } from '@angular/core';
import {TransactionService,BackboneService,MapsService} from './service';
import {SlotType,GM_PointSlot} from './slot';
import {} from 'googlemaps';
import * as xmlbuilder from 'xmlbuilder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MapsService]
})
export class AppComponent {
  title = 'INdicio';
  @ViewChild('mapHolder') mapHolder;

  constructor(private _mapService:MapsService,private test:TransactionService,private _backbone:BackboneService){}

  ngOnInit(){
    // this._backbone.getDataTypes().subscribe(i=>console.log('dataTypes',i));
    // let slot = {name:'SomeSlot',type:SlotType.String,value:"AbuDa7em"};
    // this.test.insert('urn:demo:def:objectType:avl:Driver',[{lang:'ar-SA',value:'اسم عربي'},{lang:'en-US',value:'English Name'}],[slot]);
    this.initMap();
  }
  initMap(){
    this._mapService.map(this.mapHolder.nativeElement);
    this._mapService.center(24.805024,46.656291,15);
    this._mapService.addMarker({position:{lat: 24.805024, lng: 46.656291}});
  }
}