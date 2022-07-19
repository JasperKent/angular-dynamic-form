import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { QuestionControlService } from './services/question-control/question-control.service';
import { QuestionService } from './services/question/question.service';
import { QuestionOutletComponent } from './question-outlet/question-outlet.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormQuestionComponent,
    DynamicFormComponent,
    QuestionOutletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    QuestionService, 
    QuestionControlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
