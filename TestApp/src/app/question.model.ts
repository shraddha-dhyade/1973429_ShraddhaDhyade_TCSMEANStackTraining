import { Option } from "./option.model";

export class Question{
    id:string
    desc:string;
    options:Array<Option>;
    answer:string;
    constructor(){
        this.id=""
        this.desc=""
        this.options=[]
        this.answer=""
    }
}