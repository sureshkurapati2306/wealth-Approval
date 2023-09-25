import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalSuccessfullComponent } from './approval-successfull.component';

describe('ApprovalSuccessfullComponent', () => {
  let component: ApprovalSuccessfullComponent;
  let fixture: ComponentFixture<ApprovalSuccessfullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalSuccessfullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalSuccessfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
