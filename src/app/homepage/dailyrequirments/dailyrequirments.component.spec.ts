import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyrequirmentsComponent } from './dailyrequirments.component';

describe('DailyrequirmentsComponent', () => {
  let component: DailyrequirmentsComponent;
  let fixture: ComponentFixture<DailyrequirmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyrequirmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyrequirmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
