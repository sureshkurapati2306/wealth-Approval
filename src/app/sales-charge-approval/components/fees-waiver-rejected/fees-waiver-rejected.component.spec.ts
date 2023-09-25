import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesWaiverRejectedComponent } from './fees-waiver-rejected.component';

describe('FeesWaiverRejectedComponent', () => {
  let component: FeesWaiverRejectedComponent;
  let fixture: ComponentFixture<FeesWaiverRejectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeesWaiverRejectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesWaiverRejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
