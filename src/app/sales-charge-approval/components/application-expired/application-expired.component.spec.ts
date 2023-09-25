import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationExpiredComponent } from './application-expired.component';

describe('ApplicationExpiredComponent', () => {
  let component: ApplicationExpiredComponent;
  let fixture: ComponentFixture<ApplicationExpiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationExpiredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationExpiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
