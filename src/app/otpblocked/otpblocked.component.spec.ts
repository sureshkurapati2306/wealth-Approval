import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OtpblockedComponent } from './otpblocked.component';

describe('OtpblockedComponent', () => {
  let component: OtpblockedComponent;
  let fixture: ComponentFixture<OtpblockedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpblockedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpblockedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
