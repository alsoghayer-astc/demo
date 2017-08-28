import {Component,ViewChild,Input} from '@angular/core';
import {MapsService} from '../service';

@Component({
    selector:'google-map',
    providers:[MapsService],
    template:`
        <div fxFlexFill #mapHolder></div>
    `
})
export class GoogleMapComponent{
    @ViewChild('mapHolder') public element;
    @Input() center:{latitude:number,longitude:number}={latitude:24.805024,longitude:46.656291};
    constructor(private _mapService:MapsService){}
    ngOnInit(){
        this._mapService.map(this.element.nativeElement);
        this._mapService.center(this.center.latitude,this.center.longitude,15);
        this._mapService.addMarker({position:{lat:this.center.latitude,lng:this.center.longitude}});
    }
}