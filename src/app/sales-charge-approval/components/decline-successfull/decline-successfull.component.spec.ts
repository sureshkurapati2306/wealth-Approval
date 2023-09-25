import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclineSuccessfullComponent } from './decline-successfull.component';

describe('DeclineSuccessfullComponent', () => {
  let component: DeclineSuccessfullComponent;
  let fixture: ComponentFixture<DeclineSuccessfullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclineSuccessfullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclineSuccessfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
