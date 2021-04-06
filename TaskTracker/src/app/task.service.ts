import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from "./task.model";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(public httpClient:HttpClient) { }

storeTask(emp:any){
    this.httpClient.post("http://localhost:3000/tasks",emp).subscribe(result=>console.log(result),error=>console.log(error))
}

loadTasks():Observable<Task[]>{
  return this.httpClient.get<Task[]>("http://localhost:3000/tasks")
}
}
