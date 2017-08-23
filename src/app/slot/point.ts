import {Slot} from './slot.interface';
import {XMLElementOrXMLNode} from '@types/xmlbuilder';

const SLOT_TYPE = 'urn:ogc:def:dataType:ISO-19107:2003:GM_Point';
const SLOT_TAG = 'gml:Point';

export class GM_PointSlot implements Slot{
    latitude = 0;
    longitude = 0;
    constructor(coordinates:(string|{latitude:number,longitude:number})){
        if(typeof coordinates == 'string'){
            let parts = coordinates.split(' ');
            this.latitude = parseFloat(parts[0]);
            this.longitude = parseFloat(parts[1]);
        }else if(typeof coordinates == 'object' && coordinates.latitude && coordinates.longitude){
            this.latitude = coordinates.latitude;
            this.longitude = coordinates.longitude;
        }else{
            throw new Error('Invalid GM_Point value format');
        }
    }

    toXML(parent:XMLElementOrXMLNode,name:string){
        parent
            .ele('rim:Slot').att('slotType',SLOT_TYPE).att('name',name)
            .ele('wrs:ValueList')
            .ele('wrs:AnyValue')
            .ele(SLOT_TAG)
            .att('gml:id','urn_uuid_d7306bc0-6391-11e4-9803-0800200c9a66')
            .att('srsName','urn:ogc:def:crs:EPSG::4326')
                .ele('gml:pos',`${this.latitude} ${this.longitude}`);
    }
}