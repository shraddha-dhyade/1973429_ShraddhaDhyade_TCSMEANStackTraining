import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatRadioModule } from "@angular/material/radio";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
// import {MatRadioGroupHarness} from '@angular/material/radio/testing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { QuestionService } from './question.service';
import { QuestionComponent } from './question/question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StarttestComponent } from './starttest/starttest.component';
// import { ScoreComponent } from './score/score.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    QuestionComponent,
    StarttestComponent
    // ScoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatFormFieldModule,
    MatCardModule
    // MatRadioGroupHarness
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
