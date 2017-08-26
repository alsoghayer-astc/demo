import {Injectable} from '@angular/core';
import {BackendService} from './backend.service';
import * as xmlbuilder from 'xmlbuilder';
import {prepareRoot} from './xml';
import {Slot,SlotType,addSlot} from '../slot';

@Injectable()
export class TransactionService{
    constructor(private backend:BackendService){}

    insert(objectType,name:string|{lang:string,value:string}[],slots=[]){
        let transaction = prepareRoot();
        let insert = transaction.ele('Insert');
        let extrinsicObject = this.addExtrinsicObject(objectType);
        
        for(let slot of slots){
            extrinsicObject.importDocument(addSlot(slot.name,slot.value,slot.type));
        }
        extrinsicObject.importDocument(this.addName(name));

        insert.importDocument(extrinsicObject);

        this.backend.publish(transaction.toString())
            .subscribe(i=>console.log(i));
    }

    update(){
        throw new Error('Not Implemented Yet');
    }

    delete(){
        throw new Error('Not Implemented Yet');
    }



    /* PRIVATE METHODS, Should be moved somewhere else, may be a builder class for extrinsic object ?  */
    private addExtrinsicObject(objectType,id=''){
        return xmlbuilder.create('wrs:ExtrinsicObject').att('id','').att('objectType',objectType);
    }

    private addName(name:string|{lang:string,value:string}[]){
        if(typeof name == 'string')
            return xmlbuilder.create('rim:Name')
                .ele('rim:LocalizedString')
                    .att('charset','UTF-8')
                    .att('xml:lang','en-US')
                    .att('value',name);
        else if(typeof name == 'object'){
            let rimName = xmlbuilder.create('rim:Name');
            for(let n of name){
                rimName.ele('rim:LocalizedString')
                    .att('charset','UTF-8')
                    .att('xml:lang',n.lang)
                    .att('value',n.value);
            }
            return rimName;
        }
    }
}