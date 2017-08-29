import {Slot} from './slot.class';
export class ExtrinsicObject{
    constructor(private type:string,private superType:string,private slots:Slot[], private reqProps:string[]=[],private mimeTypes:string[]=[]){}
}