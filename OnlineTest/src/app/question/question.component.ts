import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Question } from '../question.model';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  questions:Array<Question>=[];
  myForm:FormGroup;
  qFormGroup:FormGroup;
  q:Array<FormGroup>=[]
  // qfg:FormGroup
  score:number=0;
  constructor(public queServ:QuestionService, public formBuilder:FormBuilder){ 
    this.myForm = new FormGroup({
      questionsArray: this.formBuilder.array([])
    })
    this.qFormGroup=new FormGroup({
      option1: new FormControl(),
      save: new FormControl('Save')
    })
    // this.qfg=new FormGroup({ })
  }
  ngOnInit(): void {
    this.queServ.loadQuestions().subscribe(result=>{
      this.questions=result;
      this.buildForm();
    });
   }

  buildForm(){
    let questionsArray = this.myForm.get('questionsArray') as FormArray;
    this.questions.forEach(question=>{
      // this.qfg=new FormGroup({
      //   save: new FormControl('Save')
      // })
      // this.qfg.addControl(question.id, new FormControl())
      questionsArray.push(   
      // this.qfg
      this.qFormGroup
      )})
  }

  onSave(i:any){
    let questionsArray:FormArray = this.myForm.get('questionsArray') as FormArray;
    let optid=questionsArray.controls[i].value['option1'];
    // console.log(questionsArray.controls[i])
    this.checkAnswer(i,eval(optid));
  }

  checkAnswer(qid:number, optid:number):void{
    if(this.questions[qid].answer==(optid+1)){
      this.score++
      console.log("Correct Answer!")
    }
    else
      console.log("Incorrect Answer!")  
  }

  onSubmit(){
    console.log("Test Score = " + this.score + "/" + this.questions.length)
  }

}
