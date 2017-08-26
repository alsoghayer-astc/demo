import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class BackboneService{
    dataTypes:string;
    constructor(private _http:Http){
        this.getDataTypes();
    }

    getDataTypes(){
        let link = "http://localhost:8888/indicio/query?&request=GetRecordById&service=CSW-ebRIM&version=1.0.1&id=urn:oasis:names:tc:ebxml-regrep:classificationScheme:AssociationType&outputFormat=application/json&elementSetName=full&include=all&ssk=code";
        this._http.get(link).map(i=>i.json())
            .subscribe(i=>this.dataTypes=i);
    }
}