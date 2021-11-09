import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DryfruitsdealsComponent } from './dryfruitsdeals.component';

describe('DryfruitsdealsComponent', () => {
  let component: DryfruitsdealsComponent;
  let fixture: ComponentFixture<DryfruitsdealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DryfruitsdealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DryfruitsdealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
