import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DropdownQuestion } from '../questions/dropdown-question';
import { QuestionBase } from '../questions/question-base';
import { TextboxQuestion } from '../questions/textbox-question';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.css']
})
export class DynamicFormQuestionComponent {
  @Input() 
  question!: QuestionBase;
  
  @Input() 
  form!: FormGroup;
  
  get isValid(): boolean { 
    return this.form.controls[this.question.key].valid || this.form.controls[this.question.key].untouched; 
  }

  get type(): string{
    return (this.question as TextboxQuestion).type ;
  }

  get options(): {key: string, value: string}[] {
    return (this.question as DropdownQuestion).options;
  }
}