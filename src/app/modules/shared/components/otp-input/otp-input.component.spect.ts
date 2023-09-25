import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { OtpInputComponent } from './otp-input.component'

describe('OtpComponent', () => {
  let component: OtpInputComponent;
  let fixture: ComponentFixture<OtpInputComponent>;



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpInputComponent ],
      imports: [
        HttpClientModule
        ],
        providers:[]
    })
    .compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
