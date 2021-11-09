import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopbycategoryComponent } from './shopbycategory.component';

describe('ShopbycategoryComponent', () => {
  let component: ShopbycategoryComponent;
  let fixture: ComponentFixture<ShopbycategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopbycategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopbycategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
