import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeSearchComponent } from './exchange-search.component';

describe('ExchangeSearchComponent', () => {
  let component: ExchangeSearchComponent;
  let fixture: ComponentFixture<ExchangeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
