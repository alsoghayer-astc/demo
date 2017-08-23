import {Injectable} from '@angular/core';
import {BackendService} from './backend.service';
import * as xmlbuilder from 'xmlbuilder';
import {prepareRoot} from './xml';
import {GM_PointSlot} from '../slot';

@Injectable()
export class TransactionService{
    root;
    constructor(private backend:BackendService){}

    insert(objectType,name:string,slots=[]){
        let transaction = prepareRoot();
        let insert = transaction.ele('Insert');
        let object = this.addExtrinsicObject(insert,objectType);
        this.addName(object,name);
        this.addSlot(object,'point','position',{latitude:24.724068,longitude:46.669922});
        this.backend.publish(transaction.toString())
            .subscribe(i=>console.log(i));
    }

    update(){
        throw new Error('Not Implemented Yet');
    }

    delete(){
        throw new Error('Not Implemented Yet');
    }

    private addExtrinsicObject(parent,objectType,id=''){
        return parent.ele('wrs:ExtrinsicObject').att('id','').att('objectType',objectType);
    }
    
    private addSlot(parent,type,name,value){
        parent.ele('rim:Slot').att('name',name)
        let anyValue = parent.ele('wrs:ValueList');
        let point = new GM_PointSlot(value);
        point.toXML(anyValue);
    }

    private addName(parent,name){
        return parent.ele('rim:Name')
            .ele('rim:LocalizedString')
                .att('charset','UTF-8')
                .att('xml:lang','en-US')
                .att('value',name);
    }
}