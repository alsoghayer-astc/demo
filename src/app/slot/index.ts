export {GM_PointSlot} from './geometry';
export {Slot} from './slot';
export {SlotType} from './slottype.enum';
export {SlotTypeMap} from './slottype-map';

import {SlotType} from './slottype.enum';
import {SlotTypeMap} from './slottype-map';

export function addSlot(name:string,value:any,type:SlotType){
    let slotType = SlotTypeMap[type];
    let slot = new slotType.constructor(name,value,type);
    return slot.build();
}