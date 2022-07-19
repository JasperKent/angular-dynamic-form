import { QuestionBase } from './question-base';

export class TextboxQuestion extends QuestionBase {
  override controlType = 'textbox';

  constructor(
    key: string,
    label: string,
    public type: 'text' | 'email' | 'date' = 'text',
    required?: boolean,
    value?: string
  ){
    super(key, label, required || false, value || '');
  }
}