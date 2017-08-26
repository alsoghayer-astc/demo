import {create} from 'xmlbuilder';
import {SlotType} from './slottype.enum';

export class Slot{
    constructor(protected name:string,protected value:any,protected type:SlotType){}
    build(){
        return create('rim:Slot')
            .att('name',this.name)
            .att('slotType',this.type)
                .ele('rim:ValueList')
                .ele('rim:Value',this.value);
    }
}