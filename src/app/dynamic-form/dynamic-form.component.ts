import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../questions/question-base';
import { QuestionControlService } from '../services/question-control/question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnChanges {

  @Input() 
  questions: QuestionBase[] = [];
  
  form!: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {}
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['questions']){
      this.form = this.qcs.toFormGroup(this.questions as QuestionBase[]);
      this.payLoad = '';
    }
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}