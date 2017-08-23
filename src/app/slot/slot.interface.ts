import {XMLElementOrXMLNode} from '@types/xmlbuilder';

export interface Slot{
    toXML(parent:XMLElementOrXMLNode,name:string);
}