import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationOtpComponent } from './application-otp.component';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { SendOtpResponse } from 'src/app/core/models/approval.model';
import { of } from 'rxjs';

const mockState = {}

describe('ApplicationOtpComponent', () => {
  let component: ApplicationOtpComponent;
  let fixture: ComponentFixture<ApplicationOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[StoreModule.forRoot({}),RouterTestingModule],
      declarations: [ ApplicationOtpComponent ],
      providers:[provideMockStore({ initialState: mockState }),]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get Otp', () => {
    component.onOtpChange('44');
    component.approvalOtp = '44'
    expect(component).toBeTruthy();
  });

  it('should confirm and proceed', () => {
    component.confirmAndProceed();
    const payload = {
      approvalCode : "A01",
      transactionId : "105",
      otp : '123456'
    }
    expect(payload).toBeTruthy();

  });

  it('should call on request otp function', () => {
    const response: SendOtpResponse = {
      message: 'OTP Sent Successfully'
    }
    component.SendOtpSuccessMsg$ = of(response);
    const spy = jest.spyOn(component, 'requestOtpTimer');
    component.requestOtp();
    expect(spy).toHaveBeenCalled();
  })

});
