import {Injectable} from '@angular/core';
import {Http,Headers,RequestOptions} from '@angular/http';
import {toXMLDoc,XML} from './xml';

@Injectable()
export class TestService{
    constructor(private http:Http){}
    save(){
        let options = new RequestOptions();
        options.headers = new Headers();
        options.headers.append("Content-Type","text/xml");
        options.headers.append("Authorization","Basic " + btoa("admin:SlithyToves"));
        let text = new XMLSerializer().serializeToString(this.testXML())
        this.http.post("http://localhost:8888/indicio/publish",text,options)
            .subscribe();
    }
    testXML(){
        let doc = toXMLDoc(XML);
        let insert = doc.createElement("Insert");
        let obj = doc.createElement("wrs:ExtrinsicObject");
        obj.setAttribute("id","");
        obj.setAttribute("objectType","urn:auth:def:objectType:222:Vehicle3");
        
        insert.appendChild(obj);
        let slot = doc.createElement("rim:Slot");
        slot.setAttribute("name","http://purl.org/dc/terms/Location");
        slot.setAttribute("slotType","urn:ogc:def:dataType:ISO-19107:2003:GM_Point");
        let valueList = doc.createElement("wrs:ValueList");
        let anyValue = doc.createElement("wrs:AnyValue");
        let point = doc.createElement("gml:Point");
        point.setAttribute("gml:id","urn_uuid_d7306bc0-6391-11e4-9803-0800200c9a66");
        point.setAttribute("srsName","urn:ogc:def:crs:EPSG::4326");
        let pos = doc.createElement("gml:pos");
        pos.appendChild(doc.createTextNode("49.285 -123.114"));

        point.appendChild(pos);
        anyValue.appendChild(point);
        valueList.appendChild(anyValue);
        slot.appendChild(valueList);
        obj.appendChild(slot);
        this.setName(doc,obj,"Some Name");
        doc.documentElement.appendChild(insert);
        return doc;
    }

    private setName(doc:Document,object:Element,value:string){
        let name = doc.createElement("rim:Name");
        let localizedString = doc.createElement("rim:LocalizedString");
        localizedString.setAttribute("xml:lang","en");
        localizedString.setAttribute("value",value);
        name.appendChild(localizedString);
        object.appendChild(name);
    }
}