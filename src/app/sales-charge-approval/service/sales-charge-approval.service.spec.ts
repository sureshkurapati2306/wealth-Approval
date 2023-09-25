import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { SalesChargeApprovalService } from './sales-charge-approval.service';

import { GetTransactionRefId, TransactionRefId,  } from '../models/sales-charge-approval.model'

const mockApproveOrReject :TransactionRefId= {
  "message": "record fetched successfully",
  "data": {
      "approverType": '',
      "statusCode": "1",
      "transactionReferenceId": "TRX-Thu Aug 18 09:21:13 MYT 2022"
  },
  "success": true
}

const mockGetTransactionReferenceId :GetTransactionRefId= {
  "trxType": "S",
  "approverType": "RD",
  "statusCode": "1",
  "transactionReferenceId": "S928345222"
}

const mockAprovalOrRejectRequest = {
    "approvalStatus":"A",
    "email": "example@gmail.com"
}

describe('SalesChargeApprovalService', () => {
  let service: SalesChargeApprovalService;
  let httpClient: HttpClient;
  const notFoundMsg = '400 error';

  const throwNotFoundError = (error: HttpErrorResponse) => {
    expect(error.error).toBe(notFoundMsg);
    expect(error.status).toBe(400);
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
            HttpClientTestingModule
        ],
        providers: [
          SalesChargeApprovalService
        ]
    });

    service = TestBed.inject(SalesChargeApprovalService);
    httpClient = TestBed.inject(HttpClient);
});
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getTransactionRefId success path', (done) => {

    jest.spyOn(httpClient, 'get').mockReturnValue(of(mockGetTransactionReferenceId));

    service.getTransactionRefId('sdsds').subscribe(data => {
        expect(data).toEqual(mockGetTransactionReferenceId);
        done();
    });

  });
  it('should call getTransactionRefId error path', (done) => {
    const errorResponse = new HttpErrorResponse({
      error: '400 error',
      status: 400,
    });

    jest.spyOn(httpClient, 'get').mockReturnValue(throwError(errorResponse));

    service.getTransactionRefId('sdsds').subscribe(
      () => {
        done.fail('');
      },
      (error: HttpErrorResponse) => {
        throwNotFoundError(error);
        done();
      }
    );
  });
  it('should call approveOrReject success path', (done) => {
    jest.spyOn(httpClient, 'put').mockReturnValue(of(mockApproveOrReject));
    
    service.approveOrReject('sdsds',mockAprovalOrRejectRequest).subscribe(data => {
        expect(data).toEqual(mockApproveOrReject);
        done();
    });
  });

  it('should call approveOrReject error path', (done) => {
    const errorResponse = new HttpErrorResponse({
      error: '400 error',
      status: 400,
    });

    jest.spyOn(httpClient, 'put').mockReturnValue(throwError(errorResponse));

    service.approveOrReject('sdsds',mockAprovalOrRejectRequest).subscribe(
      () => {
        done.fail('');
      },
      (error: HttpErrorResponse) => {
        throwNotFoundError(error);
        done();
      }
    );
  });
});
