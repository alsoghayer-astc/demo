import {ExtrinsicObject} from './extrinsic-object.class';

export class Model{
    associations:any[]=[];
    extrinsicObjects:ExtrinsicObject[]=[];
    constructor(private id:string,private name:string,private authorityCode:string,private description:string,private modelCode:string,private modelVersion:string,private language:string="eng"){}
}