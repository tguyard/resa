import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricedIntervalComponent } from './priced-interval.component';

describe('PricedIntervalComponent', () => {
  let component: PricedIntervalComponent;
  let fixture: ComponentFixture<PricedIntervalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricedIntervalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricedIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
