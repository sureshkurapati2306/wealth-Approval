import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesWaiverApprovedComponent } from './fees-waiver-approved.component';

describe('FeesWaiverApprovedComponent', () => {
  let component: FeesWaiverApprovedComponent;
  let fixture: ComponentFixture<FeesWaiverApprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeesWaiverApprovedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesWaiverApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
