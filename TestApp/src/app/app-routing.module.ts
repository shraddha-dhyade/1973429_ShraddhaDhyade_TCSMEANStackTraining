import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { QuestionComponent } from './question/question.component';
import { StarttestComponent } from './starttest/starttest.component';

const routes: Routes = [
  {path:"test", component:FormComponent},
  {path:"\homepage", component:StarttestComponent},
  {path:"",redirectTo:"homepage", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
