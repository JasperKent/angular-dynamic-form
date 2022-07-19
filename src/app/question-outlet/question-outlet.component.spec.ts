import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionOutletComponent } from './question-outlet.component';

describe('QuestionOutletComponent', () => {
  let component: QuestionOutletComponent;
  let fixture: ComponentFixture<QuestionOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionOutletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
