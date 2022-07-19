export abstract class QuestionBase {
    abstract controlType: string;
  
    constructor(
        public key: string,
        public label: string,
        public required: boolean,
        public value: string
    ) {}
  }