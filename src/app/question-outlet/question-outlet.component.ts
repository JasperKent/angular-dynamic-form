import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionBase } from '../questions/question-base';
import { QuestionService } from '../services/question/question.service';

@Component({
  selector: 'app-question-outlet',
  templateUrl: './question-outlet.component.html',
  styleUrls: ['./question-outlet.component.css']
})
export class QuestionOutletComponent  {

  title = '';
  questions: QuestionBase[] = [];

  constructor(service: QuestionService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(params => {
      this.title = params['definition'];
      this.questions = service.getQuestions(params['definition']);
    })
  }
}
