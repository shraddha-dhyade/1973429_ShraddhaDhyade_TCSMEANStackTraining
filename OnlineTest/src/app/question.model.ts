import { Option } from "./option.model";

export class Question{
    constructor(public id:string, public desc:string, public options:Option[], public answer:number){}
}