import {Slot} from './slot.class';

export class Association{
    constructor(private type:string,private source:{type:string,cardinality:string},private target:{type:string,cardinality:string},private slots:Slot[]){}
}