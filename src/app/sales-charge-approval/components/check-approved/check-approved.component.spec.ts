import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckApprovedComponent } from './check-approved.component';

describe('CheckApprovedComponent', () => {
  let component: CheckApprovedComponent;
  let fixture: ComponentFixture<CheckApprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckApprovedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
