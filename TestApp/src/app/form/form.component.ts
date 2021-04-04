import { Component, Input, Output, OnInit,EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Question} from '../question.model'
import { QuestionService } from '../question.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // @Output() sendScore =new EventEmitter();
  questions:Array<Question>=[]
  form:FormGroup;
  score:number;
  status:string;
  total:number;
  constructor(public qServ:QuestionService, public router:Router) {
    this.toQuestions()
    this.form= new FormGroup({})
    this.score=0;
    this.status=""
    this.total=0
   }

  ngOnInit(): void {
    this.form= this.toFormGroup()
  }

  onSubmit():void{
    this.total=this.questions.length
    let scoreTotal=this.score
    this.status= (scoreTotal>(this.total/2))?"Pass!":"Fail!";
    // this.sendScore.emit(this.score)
    alert("Your score is "+ scoreTotal + "/" + this.total +". Your Test Status is " + this.status );
    // this.router.navigate(["score"]);
  }

  toQuestions():void{
    this.qServ.loadQuestions().subscribe(result=>{
      this.questions=result;
      this.form= this.toFormGroup();
    })
  }

  toFormGroup():FormGroup{
    const group: any = {};
    this.questions.forEach(question=>{
      group[question.id] = new FormControl(question.id)
    });
    return new FormGroup(group);
  }

  getScore($event:any):void{
    this.score+=$event;
  }
}
