import {Injectable} from '@angular/core';
import {} from 'googlemaps';

const MAP_KEY = "AIzaSyDFuPfcepAQ-wRikzeOZN_2WFf3C94RLis";

@Injectable()
export class MapsService{
    mapObj:google.maps.Map;
    markers:google.maps.Marker[]=[];
    map(map:Element){
        this.mapObj = new google.maps.Map(map);

        let drawingManager = new google.maps.drawing.DrawingManager({
            drawingMode: google.maps.drawing.OverlayType.MARKER,
            drawingControl: true,
            // drawingControlOptions: {
            //   position: google.maps.ControlPosition.TOP_CENTER,
            //   drawingModes: ['marker', 'circle', 'polygon', 'polyline', 'rectangle']
            // },
            //markerOptions: {},
            circleOptions: {
              fillColor: '#ffff00',
              fillOpacity: 1,
              strokeWeight: 1,
              clickable: true,
              editable: true,
              zIndex: 1
            }
          });
          google.maps
          drawingManager.setOptions({markerOptions:{position:{lat:1,lng:1},icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'}});
          drawingManager.setMap(this.mapObj);
          google.maps.event.addListener(drawingManager, 'circlecomplete', function(circle) {
            var radius = circle.getRadius();
            console.log(circle);
          });
          google.maps.event.addListener(drawingManager, 'overlaycomplete', function(event) {
            console.log(event.type);
          });
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