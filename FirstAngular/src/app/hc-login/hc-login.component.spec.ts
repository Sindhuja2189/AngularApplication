import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HCLoginComponent } from './hc-login.component';

describe('HCLoginComponent', () => {
  let component: HCLoginComponent;
  let fixture: ComponentFixture<HCLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HCLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HCLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
