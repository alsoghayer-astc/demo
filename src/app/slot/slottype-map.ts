import {Slot} from './slot';
import {GM_PointSlot} from './geometry';

export const SlotTypeMap ={
    Boolean: {
        constructor:Slot,
        "id": "urn:oasis:names:tc:ebxml-regrep:DataType:Boolean",
        "parent": "urn:oasis:names:tc:ebxml-regrep:classificationScheme:DataType"
    },
    Date: {
        constructor:Slot,
        "id": "urn:oasis:names:tc:ebxml-regrep:DataType:Date",
        "parent": "urn:oasis:names:tc:ebxml-regrep:classificationScheme:DataType"
    },
    DateTime: {
        constructor:Slot,
        "id": "urn:oasis:names:tc:ebxml-regrep:DataType:DateTime",
        "parent": "urn:oasis:names:tc:ebxml-regrep:classificationScheme:DataType"
    },
    Double: {
        constructor:Slot,
        "id": "urn:oasis:names:tc:ebxml-regrep:DataType:Double",
        "parent": "urn:oasis:names:tc:ebxml-regrep:classificationScheme:DataType"
    },
    Duration: {
        constructor:Slot,
        "id": "urn:oasis:names:tc:ebxml-regrep:DataType:Duration",
        "parent": "urn:oasis:names:tc:ebxml-regrep:classificationScheme:DataType"
    },
    Float: {
        constructor:Slot,
        "id": "urn:oasis:names:tc:ebxml-regrep:DataType:Float",
        "parent": "urn:oasis:names:tc:ebxml-regrep:classificationScheme:DataType"
    },
    Integer: {
        constructor:Slot,
        "id": "urn:oasis:names:tc:ebxml-regrep:DataType:Integer",
        "parent": "urn:oasis:names:tc:ebxml-regrep:classificationScheme:DataType"
    },
    ObjectRef: {
        "id": "urn:oasis:names:tc:ebxml-regrep:DataType:ObjectRef",
        "parent": "urn:oasis:names:tc:ebxml-regrep:classificationScheme:DataType"
    },
    String: {
        constructor:Slot,
        "id": "urn:oasis:names:tc:ebxml-regrep:DataType:String",
        "parent": "urn:oasis:names:tc:ebxml-regrep:classificationScheme:DataType"
    },
    Time: {
        constructor:Slot,
        "id": "urn:oasis:names:tc:ebxml-regrep:DataType:Time",
        "parent": "urn:oasis:names:tc:ebxml-regrep:classificationScheme:DataType"
    },
    URI: {
        constructor:Slot,
        "id": "urn:oasis:names:tc:ebxml-regrep:DataType:URI",
        "parent": "urn:oasis:names:tc:ebxml-regrep:classificationScheme:DataType"
    },
    Language: {
        constructor:Slot,
        "id": "urn:ogc:def:dataType:RFC-4646:LanguageTag",
        "parent": "urn:oasis:names:tc:ebxml-regrep:classificationScheme:DataType"
    },
    GM_Envelope: {
        constructor:Slot,
        "id": "urn:ogc:def:dataType:ISO-19107:2003:GM_Envelope",
        "parent": "urn:oasis:names:tc:ebxml-regrep:classificationScheme:DataType"
    },
    GM_Point: {
        constructor:GM_PointSlot,
        "id": "urn:ogc:def:dataType:ISO-19107:2003:GM_Point",
        "parent": "urn:ogc:def:dataType:ISO-19107:2003:GM_Object"
    },
    GM_LineString: {
        constructor:Slot,
        "id": "urn:ogc:def:dataType:ISO-19107:2003:GM_LineString",
        "parent": "urn:ogc:def:dataType:ISO-19107:2003:GM_Curve"
    },
    GM_Curve: {
        constructor:Slot,
        "id": "urn:ogc:def:dataType:ISO-19107:2003:GM_Curve",
        "parent": "urn:ogc:def:dataType:ISO-19107:2003:GM_Object"
    },
    GM_Polygon: {
        constructor:Slot,
        "id": "urn:ogc:def:dataType:ISO-19107:2003:GM_Polygon",
        "parent": "urn:ogc:def:dataType:ISO-19107:2003:GM_Surface"
    },
    GM_Surface: {
        constructor:Slot,
        "id": "urn:ogc:def:dataType:ISO-19107:2003:GM_Surface",
        "parent": "urn:ogc:def:dataType:ISO-19107:2003:GM_Object"
    },
    GM_MultiPoint: {
        constructor:Slot,
        "id": "urn:ogc:def:dataType:ISO-19107:2003:GM_MultiPoint",
        "parent": "urn:ogc:def:dataType:ISO-19107:2003:GM_Aggregate"
    },
    GM_MultiCurve: {
        constructor:Slot,
        "id": "urn:ogc:def:dataType:ISO-19107:2003:GM_MultiCurve",
        "parent": "urn:ogc:def:dataType:ISO-19107:2003:GM_Aggregate"
    },
    GM_MultiSurface: {
        constructor:Slot,
        "id": "urn:ogc:def:dataType:ISO-19107:2003:GM_MultiSurface",
        "parent": "urn:ogc:def:dataType:ISO-19107:2003:GM_Aggregate"
    },
    GM_Aggregate: {
        constructor:Slot,
        "id": "urn:ogc:def:dataType:ISO-19107:2003:GM_Aggregate",
        "parent": "urn:ogc:def:dataType:ISO-19107:2003:GM_Object"
    },
    GM_Object: {
        constructor:Slot,
        "id": "urn:ogc:def:dataType:ISO-19107:2003:GM_Object",
        "parent": "urn:oasis:names:tc:ebxml-regrep:classificationScheme:DataType"
    },
    TM_Instant: {
        constructor:Slot,
        "id": "urn:ogc:def:dataType:ISO-19108:2002:TM_Instant",
        "parent": "urn:ogc:def:dataType:ISO-19108:2002:TM_GeometricPrimitive"
    },
    TM_Period: {
        constructor:Slot,
        "id": "urn:ogc:def:dataType:ISO-19108:2002:TM_Period",
        "parent": "urn:ogc:def:dataType:ISO-19108:2002:TM_GeometricPrimitive"
    },
    TM_GeometricPrimitive: {
        constructor:Slot,
        "id": "urn:ogc:def:dataType:ISO-19108:2002:TM_GeometricPrimitive",
        "parent": "urn:oasis:names:tc:ebxml-regrep:classificationScheme:DataType"
    }
};