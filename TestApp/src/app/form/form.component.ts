import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Question} from '../question.model'
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  questions:Array<Question>=[]
  form:FormGroup;
  score:number;
  constructor(public qServ:QuestionService) {
    this.toQuestions()
    this.form= this.toFormGroup()
    this.score=0;
   }

  ngOnInit(): void {
    this.form= this.toFormGroup()
  }

  onSubmit():void{
    let total=this.questions.length
    let scoreTotal=this.score
    let status= (scoreTotal>(total/2))?"Passed!":"Failed!";
    alert("Your score is "+ scoreTotal + "/" + total +". You have " + status );
  }

  toQuestions():void{
    this.qServ.loadQuestions().subscribe(result=>{
      this.questions=result;
      this.form= this.toFormGroup();
      console.log(this.form)
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
