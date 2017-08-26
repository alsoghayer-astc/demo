import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';

/*
http://localhost:8888/indicio/query?request=GetRecordById&service=CSW-ebRIM&version=1.0.1&id=urn:oasis:names:tc:ebxml-regrep:classificationScheme:AssociationType&outputFormat=application/json&elementSetName=full&include=all&ssk=code
*/
@Injectable()
export class BackboneService{
    dataTypes:string;
    constructor(private _http:Http){
        this.fetchDataTypes();
    }

    fetchDataTypes(){
        let link = "http://localhost:8888/indicio/query?&request=GetRecordById&service=CSW-ebRIM&version=1.0.1&id=urn:oasis:names:tc:ebxml-regrep:classificationScheme:AssociationType&outputFormat=application/json&elementSetName=full&include=all&ssk=code";
        return this._http.get(link).map(i=>i.json())
            .map(i=>i.searchResults[0].classificationNodes)
            .map(i=>JSON.stringify(i))
            .do(i=>this.dataTypes=i);
    }

    /*
    json parsing is for guaranting the returned dataTypes is always a clone
    */
    getDataTypes(){
        if(this.dataTypes){
            return Observable.of(JSON.parse(this.dataTypes))
        }else{
            return this.fetchDataTypes().map(i=>JSON.parse(i));
        }
    }
}