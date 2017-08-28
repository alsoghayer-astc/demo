import {Injectable} from '@angular/core';
import {Http,Headers,RequestOptions} from '@angular/http';
import {toXMLDoc,XML,transaction} from './xml';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import * as xmlbuilder from 'xmlbuilder';

@Injectable()
export class BackendService{
    constructor(private http:Http){}

    private buildOptions(options:RequestOptions=undefined){
        options = options ? options: new RequestOptions();
        options.headers = options.headers? options.headers: new Headers();
        options.headers.append("Content-Type","text/xml;charset=UTF-8");
        options.headers.append("Authorization","Basic " + btoa("admin:SlithyToves"));
        return options;
    }

    publish(body){
        return this.http.post(environment.api +"publish",body,this.buildOptions())
            .map(i=>i.text());
    }
    query(requestOptions:RequestOptions){
        return this.http.get(environment.api + "query",this.buildOptions(requestOptions));
    }
}