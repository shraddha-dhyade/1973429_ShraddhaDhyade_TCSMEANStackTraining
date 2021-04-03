  import { Component, OnInit,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
  import { Question } from "../question.model";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent{ //implements OnInit {

  @Input() question: Question;
  @Input() form: FormGroup;
  constructor() {
     this.question=new Question;
     this.form=new FormGroup({});
   }

  ngOnInit(): void {
  }

  onSave(id:string) : void {
    var value = this.form.value[id];
    console.log("QuestionID : " + id + " Value " + value);
  }
}
