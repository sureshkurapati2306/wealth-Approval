import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckRejectedComponent } from './check-rejected.component';

describe('CheckRejectedComponent', () => {
  let component: CheckRejectedComponent;
  let fixture: ComponentFixture<CheckRejectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckRejectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckRejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
