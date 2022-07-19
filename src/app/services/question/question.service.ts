import { Injectable } from '@angular/core';
import { DropdownQuestion } from 'src/app/questions/dropdown-question';
import { QuestionBase } from 'src/app/questions/question-base';
import { TextboxQuestion } from 'src/app/questions/textbox-question';

@Injectable()
export class QuestionService {
  getQuestions(formName: string): QuestionBase[] {
    switch(formName){
      case 'book': 
        return [
          new TextboxQuestion('title', 'Title', 'text', true),
          new TextboxQuestion('author', 'Author', 'text', true),
          new DropdownQuestion('rating', 'Rating',[
            {key: '1', value: 'Rubbish'},
            {key: '2', value: 'Poor'},
            {key: '3', value: 'Average'},
            {key: '4', value: 'Good'},
            {key: '5', value: 'Excellent'},
          ])
        ];
      case 'author':
        return [
          new TextboxQuestion('name', 'Author name', 'text', true),
          new TextboxQuestion('style', 'Style', 'text', false),
          new TextboxQuestion('email', 'Email address', 'email', true),
          new TextboxQuestion('dob', 'Date of birth', 'date', true)
        ];
        default: return [];
    }
  }
}