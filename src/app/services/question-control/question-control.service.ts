import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionBase } from 'src/app/questions/question-base';

@Injectable()
export class QuestionControlService {
  toFormGroup(questions: QuestionBase[]): FormGroup {
    const group: any = {};

    for (let question of questions){
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
    };

    return new FormGroup(group);
  }
}