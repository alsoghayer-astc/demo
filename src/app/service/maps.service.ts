import {Injectable} from '@angular/core';
import {} from 'googlemaps';

const MAP_KEY = "AIzaSyDFuPfcepAQ-wRikzeOZN_2WFf3C94RLis";

@Injectable()
export class MapsService{
    mapObj:google.maps.Map;
    markers:google.maps.Marker[]=[];
    map(map:Element){
        this.mapObj = new google.maps.Map(map);
    }
    center(latitude,longitude,zoom=12){
        let latlong = new google.maps.LatLng(latitude,longitude);
        this.mapObj.setCenter(latlong);
        this.mapObj.setZoom(zoom);
    }
    addMarker(options:google.maps.MarkerOptions){
        options.map = this.mapObj;
        this.markers.push(new google.maps.Marker(options));
    }
}