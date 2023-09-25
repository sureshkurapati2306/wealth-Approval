import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclineComponent } from './decline.component';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { ApproveOrReject,GetTransactionRefId,TransactionRefId } from '../../models/sales-charge-approval.model';
import { SalesChargeApprovalService } from './../../service/sales-charge-approval.service';
const mockTransactionReferenceId :TransactionRefId= {
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
};

describe('DeclineComponent', () => {
  let component: DeclineComponent;
  let fixture: ComponentFixture<DeclineComponent>;
  let service :SalesChargeApprovalService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [ DeclineComponent ]
    })
    .compileComponents();
    
    service = TestBed.inject(SalesChargeApprovalService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclineComponent);
    component = fixture.componentInstance;
    jest.spyOn(Storage.prototype, 'setItem');
    component.applicationsDeclineRef = mockGetTransactionReferenceId;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it("should call getTransactionRefId", (() => {

    jest.spyOn(service, 'getTransactionRefId').mockReturnValue(of(mockGetTransactionReferenceId))

    component.transactionRefId();
    fixture.detectChanges();

  }));

  it("should call decline method", (() => {
    const decline:ApproveOrReject = {
      approvalStatus : 'R',
      remark : "test",
      email : "example@gmail.com"
    }

    jest.spyOn(service, 'approveOrReject').mockReturnValue(of(mockGetTransactionReferenceId))

    component.decline();

    fixture.detectChanges();
    service.approveOrReject('',decline).subscribe((data) => {
        expect(component.applicationsDeclineRef).toEqual(mockGetTransactionReferenceId);
        expect(data).toEqual(mockTransactionReferenceId);
    });
  }));
  it("should call navigate method", (() => {

    component.DeclineNavigate('1')?.then();
    component.DeclineNavigate('0')?.then();
    component.DeclineNavigate('2')?.then();
    component.DeclineNavigate('-1')?.then();
    component.DeclineNavigate('3')?.then();

    fixture.detectChanges();
  }));
});
