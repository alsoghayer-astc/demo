import * as xmlbuilder from 'xmlbuilder';

export const XML = `
    <Transaction service="CSW-ebRIM" version="2.0.2"
        xmlns="http://www.opengis.net/cat/csw/2.0.2"
        xmlns:csw="http://www.opengis.net/cat/csw/2.0.2"
        xmlns:rim="urn:oasis:names:tc:ebxml-regrep:xsd:rim:3.0"
        xmlns:wrs="http://www.opengis.net/cat/wrs/1.0"
        xmlns:gml="http://www.opengis.net/gml/3.2"
        xmlns:ogc="http://www.opengis.net/ogc"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        verboseResponse="true">

    </Transaction>
`;

export function prepareRoot(){

  let root = xmlbuilder.create("Transaction")
  root.att('xmlns','http://www.opengis.net/cat/csw/2.0.2')
    .att('xmlns:csw','http://www.opengis.net/cat/csw/2.0.2')
    .att('xmlns:rim','urn:oasis:names:tc:ebxml-regrep:xsd:rim:3.0')
    .att('xmlns:wrs','http://www.opengis.net/cat/wrs/1.0')
    .att('xmlns:gml','http://www.opengis.net/gml/3.2')
    .att('xmlns:ogc','http://www.opengis.net/ogc')
    .att('xmlns:xlink','http://www.w3.org/1999/xlink')
    .att('service','CSW')
    .att('version','2.0.2')
    .att('verboseResponse','true');
  return root;
}

function prepareSlots(slots:{name:string,type:string,value:any}[]){
  let xmlSlots = [];
  for(let slot of slots){
    let s = xmlbuilder.create('rim:Slot')
      .att('name',slot.name)
      .att('slotType',slot.type)
      .att('value',slot.value);
    xmlSlots.push(s);
  }
  return xmlSlots;
}

export function transaction(){
  let objectType = "urn:ogc:def:ebRIM-ObjectType:OGC:Dataset";
  let root = prepareRoot();
  root
    .ele('wrs:ExtrinsicObject').att('id','').att('objectType',objectType)
  
  let tempSlots = [
    {name:'slotName',type:'String',value:'some Slot Value'}
  ];

  let slots = prepareSlots(tempSlots);
  
  for(let s of slots){
    console.log(s.toString())
  }
  return root.toString();
}


// urn:auth:def:objectType:222:Vehicle3
/*

<wrs:ExtrinsicObject id="urn:x-indicio:test:Dataset"
      objectType="urn:ogc:def:ebRIM-ObjectType:OGC:Dataset">
      <rim:Slot name="http://purl.org/dc/terms/Location"
        slotType="urn:ogc:def:dataType:ISO-19107:2003:GM_Point">
        <wrs:ValueList>
          <wrs:AnyValue>
            <gml:Point gml:id="urn_uuid_d7306bc0-6391-11e4-9803-0800200c9a66"
              srsName="urn:ogc:def:crs:EPSG::4326">
              <gml:pos>49.285 -123.114</gml:pos>
            </gml:Point>
          </wrs:AnyValue>
        </wrs:ValueList>
      </rim:Slot>
      <rim:Slot name="http://purl.org/dc/terms/spatial"
        slotType="urn:ogc:def:dataType:ISO-19107:2003:GM_LineString">
        <wrs:ValueList>
          <wrs:AnyValue>
            <gml:LineString gml:id="urn_uuid_f8909470-6391-11e4-9803-0800200c9a66"
              srsName="urn:ogc:def:crs:EPSG::4326">
              <gml:posList srsDimension="2">
                                49.16733 -123.93676
                                49.92293 -122.77221
                                50.25422 -122.10205
                                50.67383 -120.33325
                                51.25503 -117.56469
                            
              </gml:posList>
            </gml:LineString>
          </wrs:AnyValue>
        </wrs:ValueList>
      </rim:Slot>
      <rim:Slot name="http://purl.org/dc/terms/coverage"
        slotType="urn:ogc:def:dataType:ISO-19107:2003:GM_Polygon">
        <wrs:ValueList>
          <wrs:AnyValue>
            <gml:Polygon gml:id="urn_uuid_03e28770-6392-11e4-9803-0800200c9a66"
              srsName="urn:ogc:def:crs:EPSG::4326">
              <gml:exterior>
                <gml:LinearRing>
                  <gml:posList srsDimension="2">
                                        49.2221380467 -123.023271560
                                        49.2220539590 -123.012800216
                                        49.2233713168 -123.012371063
                                        49.2236796295 -123.012800216
                                        49.2325077683 -123.012800216
                                        49.2326759081 -123.017392158
                                        49.2321434637 -123.023228645
                                        49.2221380467 -123.023271560
                                    
                  </gml:posList>
                </gml:LinearRing>
              </gml:exterior>
              <gml:interior>
                <gml:LinearRing>
                  <gml:posList srsDimension="2">
                                        49.2302938754 -123.0219411849
                                        49.2303219000 -123.0209541320
                                        49.2315269419 -123.0212116241
                                        49.2313587983 -123.0220270156
                                        49.2302938754 -123.0219411849
                                    
                  </gml:posList>
                </gml:LinearRing>
              </gml:interior>
            </gml:Polygon>
          </wrs:AnyValue>
        </wrs:ValueList>
      </rim:Slot>
      <rim:Name>
        <rim:LocalizedString xml:lang="en"
          value="Test Dataset Object"/>
      </rim:Name>
      <rim:Description>
        <rim:LocalizedString xml:lang="en"
          value="A test dataset object."/>
      </rim:Description>
    </wrs:ExtrinsicObject>
*/
// <csw:Insert>
// <rim:User id="urn:x-indicio:csw-ebrim:def:user:registryuser">
//     <rim:PersonName firstName="registry" middleName="" lastName="user" />
// </rim:User>
// </csw:Insert>
export function toXMLDoc(text:string){
    let parser = new DOMParser();
    return parser.parseFromString(text, "text/xml");
}