import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppickforyouComponent } from './toppickforyou.component';

describe('ToppickforyouComponent', () => {
  let component: ToppickforyouComponent;
  let fixture: ComponentFixture<ToppickforyouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToppickforyouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToppickforyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
