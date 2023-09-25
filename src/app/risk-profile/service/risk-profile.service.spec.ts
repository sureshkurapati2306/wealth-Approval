import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import {
  MockApproveSubscribeRequest,
  MockApproveSubscribeResponse,
  MockRPQuestionaireResponse,
  MockRPQuestionnaireRequest,
} from '../mock/risk-profile-questionire.mock';
import { RiskProfileService } from './risk-profile.service';
import {
  MockOtpValidationResponse,
  MockOtpValidationPayload,
  MockDeclinePayload,
  MockDeclineResponse,
  MockGetFundDocumentsSuccess,
} from '../../core/mock/approval.mock';

describe('RiskProfileService', () => {
  let service: RiskProfileService;
  let httpClient: HttpClient;
  const notFoundMsg = '404 error';

  const throwNotFoundError = (error: HttpErrorResponse) => {
    expect(error.error).toBe(notFoundMsg);
    expect(error.status).toBe(404);
  };

  const environment = {
    production: false,
    apiUrl: 'apiUrl',
    loginRedirectUrl: 'loginRedirectUrl',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: 'environment',
          useValue: environment,
        },
        RiskProfileService,
      ],
    });
    service = TestBed.inject(RiskProfileService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getCustomerRiskProfileMobile success path', (done) => {
    jest
      .spyOn(httpClient, 'post')
      .mockReturnValue(of(MockRPQuestionaireResponse));

    service.getQuestions(MockRPQuestionnaireRequest).subscribe((data) => {
      expect(data).toEqual(MockRPQuestionaireResponse);
      done();
    });
  });

  it('should call approveCustTrx success path', (done) => {
    jest
      .spyOn(httpClient, 'post')
      .mockReturnValue(of(MockOtpValidationResponse));

    service.approveCustTrx(MockOtpValidationPayload).subscribe((data) => {
      expect(data).toEqual(MockOtpValidationResponse);
      done();
    });
  });

  it('should call approveSubscribe success path', (done) => {
    jest
      .spyOn(httpClient, 'post')
      .mockReturnValue(of(MockApproveSubscribeResponse));

    service
      .customerApplicalReview(MockApproveSubscribeRequest)
      .subscribe((data) => {
        expect(data).toEqual(MockApproveSubscribeResponse);
        done();
      });
  });

  it('should call approveCustTrx error path', (done) => {
    const errorResponse = new HttpErrorResponse({
      error: '404 error',
      status: 404,
    });

    jest.spyOn(httpClient, 'post').mockReturnValue(throwError(errorResponse));

    service.approveCustTrx(MockOtpValidationPayload).subscribe(
      () => {
        done.fail('');
      },
      (error: HttpErrorResponse) => {
        throwNotFoundError(error);
        done();
      }
    );
  });

  it('should call declineCustTrx success path', (done) => {
    jest.spyOn(httpClient, 'post').mockReturnValue(of(MockDeclineResponse));

    service.declineCustTrx(MockDeclinePayload).subscribe((data) => {
      expect(data).toEqual(MockDeclineResponse);
      done();
    });
  });

  it('should call getFundCode success path', (done) => {
    jest.spyOn(httpClient, 'get').mockReturnValue(of({fundDocument: MockGetFundDocumentsSuccess}));

    service.getFundDocuments("fundCode").subscribe((data) => {
      expect(data).toEqual(MockGetFundDocumentsSuccess);
      done();
    });
  });

  it('should call declineCustTrx error path', (done) => {
    const errorResponse = new HttpErrorResponse({
      error: '404 error',
      status: 404,
    });

    jest.spyOn(httpClient, 'post').mockReturnValue(throwError(errorResponse));

    service.declineCustTrx(MockDeclinePayload).subscribe(
      () => {
        done.fail('');
      },
      (error: HttpErrorResponse) => {
        throwNotFoundError(error);
        done();
      }
    );
  });

  it('should call approveSubscribe success path', (done) => {
    const errorResponse = new HttpErrorResponse({
      error: '404 error',
      status: 404,
    });

    jest.spyOn(httpClient, 'post').mockReturnValue(throwError(errorResponse));

    service.customerApplicalReview(MockApproveSubscribeRequest)
      .subscribe(() => {
        done.fail();
      },
      (error: HttpErrorResponse) => {
        throwNotFoundError(error);
        done();
      }
    );
  });

  it('should call getFundCode error path', (done) => {
    const errorResponse = new HttpErrorResponse({
      error: '404 error',
      status: 404,
    });

    jest.spyOn(httpClient, 'get').mockReturnValue(throwError(errorResponse));

    service.getFundDocuments("fundCode").subscribe(() => {
      done.fail();
    }, (error: HttpErrorResponse) => {
        throwNotFoundError(error);
        done();
    });
  });

  it('should call the fund document download error path', (done) => {
    const errorResponse = new HttpErrorResponse({
      error: '404 error',
      status: 404,
    });

    jest.spyOn(httpClient, 'post').mockReturnValue(throwError(errorResponse));

    service.downloadDocument(MockGetFundDocumentsSuccess[0])
      .subscribe(() => {
        done.fail();
      },
      (error: HttpErrorResponse) => {
        throwNotFoundError(error);
        done();
      }
    );
  });


  it('should call the fund document download success path', (done) => {

    const response = of('abc');

    jest.spyOn(httpClient, 'post').mockReturnValue(response);

    service.downloadDocument(MockGetFundDocumentsSuccess[0])
      .subscribe((res) => {
        expect(typeof(res)).toEqual('object')
        done();
      }
    );
  })


});
