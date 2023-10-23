import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsboxComponent } from './resultsbox.component';

describe('ResultsboxComponent', () => {
  let component: ResultsboxComponent;
  let fixture: ComponentFixture<ResultsboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultsboxComponent],
    });
    fixture = TestBed.createComponent(ResultsboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
