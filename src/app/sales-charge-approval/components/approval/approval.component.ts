import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { SalesChargeApprovalService } from './../../service/sales-charge-approval.service';
import { ApproveOrReject, GetTransactionRefId} from '../../models/sales-charge-approval.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.scss']
})
export class ApprovalComponent implements OnInit {

  applicationsRef!:GetTransactionRefId;

  approvalCode!:string;

  emailId!:string;

  constructor(
    private readonly activeRoute: ActivatedRoute,
    private approvalService:SalesChargeApprovalService,
    private route: Router
    ) { }

  ngOnInit(): void {
    this.approvalCode = this.activeRoute.snapshot?.params?.approvalCode as string;
    this.emailId = this.activeRoute.snapshot?.params?.emailId as string;
    this.transactionRefId();
  }

  transactionRefId():void{
    this.approvalService.getTransactionRefId(this.approvalCode).subscribe(
      response =>{
        this.applicationsRef = response;
        sessionStorage.setItem('applicationsRefId', this.applicationsRef.transactionReferenceId);
        if(this.applicationsRef.statusCode !== '1' ){
          this.navigate(this.applicationsRef.statusCode)?.then();
        }
      },(error:HttpErrorResponse) => {
        this.navigate('0')?.then();
    }
    )
  }

  approve():void{
    const approvalData:ApproveOrReject = {
      approvalStatus : 'A',
      email: this.emailId
    }

    this.approvalService.approveOrReject(this.approvalCode,approvalData).subscribe(
     (response) => {
       this.navigate(response.statusCode)?.then();
      },(error:HttpErrorResponse) => {
            this.navigate('0')?.then();
        }
    )
  }

  async navigate(id:string):Promise<void>{
    if(id == '1'){
      await this.route.navigateByUrl('/sales-charge-approval/approval-successfull');
    } else if(id == '0'){
      await this.route.navigateByUrl('/sales-charge-approval/system-error');
    } else if(id == '2'){
      await this.route.navigateByUrl('/sales-charge-approval/check-approved');
    } else if(id == '-1'){
      await this.route.navigateByUrl('/sales-charge-approval/check-rejected');
    } else if(id == '3'){
      await this.route.navigateByUrl('/sales-charge-approval/application-expired');
    }
  }

}
