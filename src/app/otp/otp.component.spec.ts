import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { OtpService } from '../sales-charge-approval/service/otp.service'
import { OtpComponent } from './otp.component';
import { of } from 'rxjs';
import { confirmOtpResponse, getOtpResponse } from '../sales-charge-approval/models/otp-input.model';
import { RouterTestingModule } from '@angular/router/testing';

class MockMatDialog {
  open() {/* mock function */}
}


describe('OtpComponent', () => {
  let component: OtpComponent;
  let fixture: ComponentFixture<OtpComponent>;
  let service: OtpService;
  let dialog: MatDialog;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OtpComponent],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        MatDialogModule
      ],
      providers: [
        OtpService,
        { provide: MatDialog, useClass: MockMatDialog }
      ]
    })
      .compileComponents();
    service = TestBed.inject(OtpService);
    dialog = TestBed.inject(MatDialog);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check if confirm button is disabled initially', () => {
    expect(component.confirmEnable).toBeFalsy();
  });

  it('check requuest otp link is enabled initially', () => {
    expect(component.requestEnable).toBeTruthy();
  })

  it('on click of request otp', () => {
    component.requestOtp();
    component.timer = 18;
    expect(component.requestEnable).toBeFalsy();
  })

  it('on entering otp', () => {
    const e = "123456"
    component.otpEnter(e);
    expect(component.otpValue).toEqual(Number(e));
    expect(component.confirmEnable).toBeTruthy();
  })

  it('confirm button click', fakeAsync(() => {
    fixture.detectChanges();

    const response: confirmOtpResponse = {
      "message": "OTP Verification Successful",
      "referenceNumber": "HV904L4T5837DZDBM2CJHYJDUEUHVJ1T"
    }

    jest.spyOn(service, 'confirmOtp').mockReturnValue(of(response))
    component.confirmOtp();

    tick(200);

    expect(component.otpError).toBeFalsy();
  }))

  it('on entering woring otp', () => {
    const e = "1234"
    component.otpEnter(e);
    expect(component.otpValue).toEqual(Number(e));
    expect(component.confirmEnable).toBeFalsy();
  });

  it('confirm button click when no response return', fakeAsync(() => {
    const response: confirmOtpResponse = {
      message: null,
      referenceNumber: null
    };
    const spy = jest.spyOn(dialog, 'open');
    component.trialCount = 2
    jest.spyOn(service, 'confirmOtp').mockReturnValue(of(response))
    component.confirmOtp();

    tick(200);

    expect(component.otpError).toBeTruthy();
    expect(spy).toHaveBeenCalled();
  }));

  it('should show alert when getOtp is called', fakeAsync(() => {
    const response: getOtpResponse = {
      message: "01123274241"
    };

    const spy = jest.spyOn(service, 'getOtp').mockReturnValue(of(response))
    component.getOtp();

    tick();

    expect(spy).toHaveBeenCalled();
  }));

  it('should update the count down time', () => {
    component.minutes = 2;
    component.seconds = 59;
    component.time = 179;

    component.updateCountdown();

    expect(component.minutes).toBe(2);
    expect(component.seconds).toBe(59);
    expect(component.time).toBe(178);
  })

});
