import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewproductdetailComponent } from './viewproductdetail.component';

describe('ViewproductdetailComponent', () => {
  let component: ViewproductdetailComponent;
  let fixture: ComponentFixture<ViewproductdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewproductdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewproductdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
