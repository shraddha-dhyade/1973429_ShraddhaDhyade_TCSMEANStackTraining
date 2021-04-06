import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {

  
  tasks:Task[]=[]
  index:string[]=["id","name","task","date"]
  constructor(public taskServ:TaskService) { }

  ngOnInit(): void {
    this.displayTasks()
  } 

  storeTask(taskRef:any){
    this.taskServ.storeTask(taskRef)
    this.displayTasks()
  }

  displayTasks(){
    this.taskServ.loadTasks().subscribe(result=>{
      this.tasks=result;
    },(error) => console.log(error))
  }

}
