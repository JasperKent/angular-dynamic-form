import { QuestionBase } from './question-base';

export class DropdownQuestion extends QuestionBase {
  override controlType = 'dropdown';

  constructor(key: string,
    label: string,
    public options: {key: string, value: string}[],
    value?: string)
    {
      super(key, label, true, value || '');
    }
}