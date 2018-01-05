import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteMeaningComponent } from './quote-meaning.component';

describe('QuoteMeaningComponent', () => {
  let component: QuoteMeaningComponent;
  let fixture: ComponentFixture<QuoteMeaningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteMeaningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteMeaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
