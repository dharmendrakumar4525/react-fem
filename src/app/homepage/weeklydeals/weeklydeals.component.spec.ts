import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklydealsComponent } from './weeklydeals.component';

describe('WeeklydealsComponent', () => {
  let component: WeeklydealsComponent;
  let fixture: ComponentFixture<WeeklydealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklydealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklydealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
