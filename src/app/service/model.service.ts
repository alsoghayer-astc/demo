import {Injectable} from '@angular/core';
import {BackendService} from './backend.service'
import {RequestOptions,URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ExtrinsicObject,Slot,Model,Association} from '../model';

const EXTRINSIC_OBJECT_TYPE = "urn:oasis:names:tc:ebxml-regrep:ObjectType:RegistryObject:ExtrinsicObject";
const ASSOCIATION_TYPE = "urn:oasis:names:tc:ebxml-regrep:ObjectType:RegistryObject:Association";

@Injectable()
export class ModelService{
    models:Model[] = undefined;
    
    constructor(private _backend:BackendService){
        this.fetchAllModels()
            .subscribe(); //TESTING ONLY
    }

    getAllModels(){
        return this.models? Observable.from(this.models):this.fetchAllModels();
    }

    private fetchAllModels():Observable<Model>{
        let options = new RequestOptions();
        options.params = new URLSearchParams();
        options.params.append('request','Query'); 
        options.params.append('service','CSW-ebRIM'); 
        options.params.append('version','1.0.1'); 
        options.params.append('qid','urn:x-indicio:def:stored-query:all-objects-of-type'); 
        options.params.append('resultType','results'); 
        options.params.append('outputFormat','application/json'); 
        options.params.append('maxRecords','1000'); 
        options.params.append('type','urn:x-indicio:def:ebrim:ObjectType:Model');

        return this._backend.query(options)
            .do(i=>this.models = [])
            .map(i=>i.json())
            .map(i=>i.searchResults)
            .flatMap(i=>Observable.from(i)) 
            .flatMap((i:any)=>this.fetchModel(i.id))
            .map(i=>this.buildModel(i))
    }

    private fetchModel(id:string){
        let options = new RequestOptions();
        options.params = new URLSearchParams();
        options.params.append('request','GetRepositoryItem'); 
        options.params.append('service','CSW-ebRIM'); 
        options.params.append('id',id);

        return this._backend.query(options)
        .map(i=>i.json());
    }

    private buildModel(model:any){
        let md = model.root.metadata;

        let modelObj = new Model(md.id,md.name,md.authorityCode,md.description,md.modelCode,md.modelVersion,md.language);
        
        for(let c of model.root.constraints){
            if(c.constraint.supertype == EXTRINSIC_OBJECT_TYPE)
                modelObj.extrinsicObjects.push(this.buildExtrinsicObject(c.constraint));
            else if(c.constraint.type == ASSOCIATION_TYPE)
                modelObj.associations.push(this.buildAssociation(c.constraint));
        }
        this.models.push(modelObj);
        return modelObj;
    }

    private buildExtrinsicObject(object){
        let slots:Slot[] = this.buildSlots(object.slots);
        
        return new ExtrinsicObject(object.type,object.supertype,slots,object.reqProps.map(i=>i.propName));
    }

    private buildAssociation(association){
        return new Association(association.type,association.source,association.target,this.buildSlots(association.slots));
    }
    private buildSlots(rawSlots){
        let slots:Slot[] = [];
        for(let slot of rawSlots){
            let s = new Slot(slot.dataType,slot.id,slot.cardinality,slot.defaultValue);
            slots.push(s);
        }
        return slots;
    }
}