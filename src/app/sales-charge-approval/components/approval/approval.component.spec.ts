import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalComponent } from './approval.component';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { ApproveOrReject,GetTransactionRefId,TransactionRefId } from '../../models/sales-charge-approval.model';
import { SalesChargeApprovalService } from './../../service/sales-charge-approval.service';
import { ActivatedRoute } from '@angular/router';


const mockGetTransactionReferenceId :GetTransactionRefId= {
  "trxType": "S",
  "approverType": "RD",
  "statusCode": "1",
  "transactionReferenceId": "S928345222"
};

const mockTransactionReferenceId :TransactionRefId= {
  "message": "record fetched successfully",
  "data": {
      "approverType": '',
      "statusCode": "1",
      "transactionReferenceId": "TRX-Thu Aug 18 09:21:13 MYT 2022"
  },
  "success": true
};


describe('ApprovalComponent', () => {
  let component: ApprovalComponent;
  let fixture: ComponentFixture<ApprovalComponent>;
  let service :SalesChargeApprovalService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [ ApprovalComponent ],
      providers:[ApprovalComponent, { provide: ActivatedRoute,useValue: {snapshot: {params: {'approvalCode': '123','email':'exaple@gmail.com'}}}}]
    })
    .compileComponents();
    service = TestBed.inject(SalesChargeApprovalService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalComponent);
    component = fixture.componentInstance;
    jest.spyOn(Storage.prototype, 'setItem');
    component.applicationsRef = mockGetTransactionReferenceId;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should call getTransactionRefId", (() => {

   const spy = jest.spyOn(service, 'getTransactionRefId').mockReturnValue(of(mockGetTransactionReferenceId))

    component.transactionRefId();
    fixture.detectChanges();
    component.navigate('1')?.then();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(component.applicationsRef).toEqual(mockGetTransactionReferenceId);
 
  }));
  it("should call getTransactionRefId   ds", (() => {
    component.transactionRefId();
    fixture.detectChanges();
    component.navigate('1')?.then();
  }))

  it("should call approve method", (() => {
    const approval:ApproveOrReject = {
      approvalStatus : 'A',
      email: 'example@gmail.com'
    }

    jest.spyOn(service, 'approveOrReject').mockReturnValue(of(mockGetTransactionReferenceId))

    component.approve();

    fixture.detectChanges();
    service.approveOrReject('',approval).subscribe((data) => {
        expect(component.applicationsRef).toEqual(mockGetTransactionReferenceId);
        expect(data).toEqual(mockGetTransactionReferenceId);
    });
  }));

  it("should call navigate method", (() => {

    component.navigate('1')?.then();
    component.navigate('0')?.then();
    component.navigate('2')?.then();
    component.navigate('-1')?.then();

    fixture.detectChanges();
  }));
});
