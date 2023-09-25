import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalToPoComponent } from './approval-to-po.component';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from '@angular/common/http';
import { GetTransactionRefId } from '../../models/sales-charge-approval.model';
import { SalesChargeApprovalService } from '../../service/sales-charge-approval.service';
import { of } from 'rxjs';

const mockPoTransactionReferenceId :GetTransactionRefId= {
      "trxType":"RD",
      "approverType": '',
      "statusCode": "1",
      "transactionReferenceId": "TRX-Thu Aug 18 09:21:13 MYT 2022"
}

describe('ApprovalToPoComponent', () => {
  let component: ApprovalToPoComponent;
  let fixture: ComponentFixture<ApprovalToPoComponent>;
  let service :SalesChargeApprovalService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalToPoComponent ],
      imports: [
        RouterTestingModule,
        HttpClientModule]
    })
    .compileComponents();
    service = TestBed.inject(SalesChargeApprovalService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalToPoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should call ngOnInit",(() => {
    const spy = jest.spyOn(service, 'approveOrReject').mockReturnValue(of(mockPoTransactionReferenceId))
    component.ngOnInit();
    fixture.detectChanges();
    expect(spy).toBeCalledTimes(1);
    expect(component.applicationsRefId).toEqual(mockPoTransactionReferenceId.transactionReferenceId);
  }));

  it("should call navigate method",(() => {
    component.navigate('0')?.then();
    component.navigate('-1')?.then();
    component.navigate('2')?.then();
    component.navigate('3')?.then();
    fixture.detectChanges();
  }))
});
