import { Component, Input, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import {Question} from '../question.model'
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() questions:Array<Question>=[]
  form:FormGroup;
  constructor(public qServ:QuestionService) {
    this.toQuestions()
    this.form= this.toFormGroup()
   // console.log(this.form);
   }

  ngOnInit(): void {
    this.form= this.toFormGroup()
  }

  onSubmit():void{}

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
      // const questionsGroup: any = {};
      // questionsGroup["q"+question.id]=new FormControl("q" + question.id)
      // questionsGroup["save"+question.id]=new FormControl("save"+question.id)
      // group[question.id]=new FormGroup(questionsGroup)
      group[question.id] = new FormControl(question.id)
    });
    return new FormGroup(group);
  }
}
