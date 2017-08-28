import {Injectable} from '@angular/core';
import {BackendService} from './backend.service'
import {RequestOptions,URLSearchParams} from '@angular/http';

@Injectable()
export class ModelService{
    constructor(private _backend:BackendService){
        this.fetchModel().subscribe(); //TESTING ONLY
    }

    private fetchModel(){
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
            .map(i=>i.json())
            .do(i=>console.log(i))
    }
}