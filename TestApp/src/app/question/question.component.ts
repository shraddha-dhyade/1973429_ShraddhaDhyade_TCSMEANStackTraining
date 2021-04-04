  import { Component, Input, Output,EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
  import { Question } from "../question.model";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent{

  @Input() question: Question;
  @Input() form: FormGroup;
  @Output() updateScore =new EventEmitter();
  score:number;
  constructor() {
     this.question=new Question;
     this.form=new FormGroup({});
     this.score=0;
   }

  ngOnInit(): void {
  }

  onSave(id:string) : void {
    if(this.form.controls[id].disabled){
      alert("Already submitted!")
    }
    else{
      var value = this.form.value[id];
      var ans = this.question.answer;
      if(value==ans){
        this.score++;
        alert("Correct Answer!")
      }
      else{
        alert("Incorrect Answer! Correct Answer is " + this.question.options[eval(ans)-1].desc +"." )
      }
      this.form.controls[id].disable()
      this.updateScore.emit(this.score) 
    }   
  }
}
