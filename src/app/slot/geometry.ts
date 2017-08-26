import {Slot} from './slot';
import {create} from 'xmlbuilder';
import {SlotType} from './slottype.enum';

const SLOT_TAG = 'gml:Point';

export class GM_PointSlot extends Slot{
    latitude = 0;
    longitude = 0;
    constructor(name:string,coordinates:(string|{latitude:number,longitude:number}),type=SLOT_TAG){
        super(name,coordinates,SlotType.GM_Point);

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

    build(){
        return create('rim:Slot').att('slotType',this.type).att('name',this.name)
            .ele('wrs:ValueList')
            .ele('wrs:AnyValue')
            .ele(SLOT_TAG)
            .att('gml:id','urn_uuid_d7306bc0-6391-11e4-9803-0800200c9a66')
            .att('srsName','urn:ogc:def:crs:EPSG::4326')
                .ele('gml:pos',`${this.latitude} ${this.longitude}`);
    }
}