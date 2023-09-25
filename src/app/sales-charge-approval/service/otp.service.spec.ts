import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { OtpService } from './otp.service'

const getOtpResponse = {
    "message": "OTP Sent Successfully"
}

const mockConfirmOtpReq = {
        "mobileNumber": "01128662653",
        "otp": "111111"
}
const mockOtpRes = {
        "message": "OTP Verification Successful",
        "referenceNumber": "HV904L4T5837DZDBM2CJHYJDUEUHVJ1T"
}

describe('SalesChargeApprovalService', () => {
  let service: OtpService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
            HttpClientTestingModule
        ],
        providers: [
            OtpService
        ]
    });

    service = TestBed.inject(OtpService);
    httpClient = TestBed.inject(HttpClient);
});
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call on click request Otp', (done) => {

    jest.spyOn(httpClient, 'post').mockReturnValue(of(getOtpResponse));

    service.getOtp({
            "mobileNumber": ""
        }).subscribe(data => {
        expect(data).toEqual(getOtpResponse);
        done();
    });

  });

  it('should call on Confirm of Otp', (done) => {
    jest.spyOn(httpClient, 'post').mockReturnValue(of(mockOtpRes));
    
    service.confirmOtp(mockConfirmOtpReq).subscribe(data => {
        expect(data).toEqual(mockOtpRes);
        done();
    });
  });
});
