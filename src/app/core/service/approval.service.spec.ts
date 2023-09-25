import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';

import { ApprovalService } from './approval.service';
import { MockGetTandCContent, MockGetTandCList, MockSendOtpResponse} from '../mock/approval.mock'


describe('ApplicationReviewService', () => {
  let service: ApprovalService;
  let httpClient: HttpClient;
  const notFoundMsg = '404 error';

    const throwNotFoundError = (error: HttpErrorResponse) => {
        expect(error.error).toBe(notFoundMsg);
        expect(error.status).toBe(404);
      }

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
            HttpClientTestingModule
        ],
        providers: [
          ApprovalService
        ]
    });

    service = TestBed.inject(ApprovalService);
    httpClient = TestBed.inject(HttpClient);
});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getTandCList success path', (done) => {

    jest.spyOn(httpClient, 'get').mockReturnValue(of(MockGetTandCList));

    service.getTandCList('sdsds').subscribe(data => {
        expect(data).toEqual(MockGetTandCList);
        done();
    });

  });

  it('should call getTandCList error path', (done) => {

    const errorResponse = new HttpErrorResponse({
        error: '404 error',
        status: 404
    });

    jest.spyOn(httpClient, 'get').mockReturnValue(throwError(errorResponse));

    service.getTandCList('')
        .subscribe(
            () => { done.fail('') },
            (error: HttpErrorResponse) => {
                throwNotFoundError(error);
                done();
            });
    });

  it('should call getTandCContent success path', (done) => {

    jest.spyOn(httpClient, 'get').mockReturnValue(of(MockGetTandCContent));

    service.getTandCContent(1).subscribe(data => {
        expect(data).toEqual(MockGetTandCContent);
        done();
    });

  });

  it('should call getTandCContent error path', (done) => {

    const errorResponse = new HttpErrorResponse({
        error: '404 error',
        status: 404
    });

    jest.spyOn(httpClient, 'get').mockReturnValue(throwError(errorResponse));

    service.getTandCContent(1)
        .subscribe(
            () => { done.fail('') },
            (error: HttpErrorResponse) => {
                throwNotFoundError(error);
                done();
            });
    });

  it('should call getSendOtp success message', (done) => {

    jest.spyOn(httpClient, 'get').mockReturnValue(of(MockSendOtpResponse));

    service.SendOtp('105').subscribe(data => {
        expect(data).toEqual(MockSendOtpResponse);
        done();
    });

  });

  it('should call getSendOtp error path', (done) => {

    const errorResponse = new HttpErrorResponse({
        error: '404 error',
        status: 404
    });

    jest.spyOn(httpClient, 'get').mockReturnValue(throwError(errorResponse));

    service.SendOtp('')
        .subscribe(
            () => { done.fail('') },
            (error: HttpErrorResponse) => {
                throwNotFoundError(error);
                done();
            });
    });
});
