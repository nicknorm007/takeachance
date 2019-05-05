import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyresultsComponent } from './dailyresults.component';

describe('DailyresultsComponent', () => {
  let component: DailyresultsComponent;
  let fixture: ComponentFixture<DailyresultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyresultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
