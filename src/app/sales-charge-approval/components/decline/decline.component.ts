import { Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { SalesChargeApprovalService } from './../../service/sales-charge-approval.service';
import { ApproveOrReject, GetTransactionRefId } from '../../models/sales-charge-approval.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-decline',
  templateUrl: './decline.component.html',
  styleUrls: ['./decline.component.scss']
})
export class DeclineComponent implements OnInit {
  panelOpenState = true;

  remarks = new FormControl('')

  applicationsDeclineRef!:GetTransactionRefId;

  declineCode = ''
  emailId!: string;

  constructor(
    private readonly activeRoute: ActivatedRoute,
    private approvalService:SalesChargeApprovalService,
    private route: Router
    ) { }

  ngOnInit(): void {
    this.declineCode = this.activeRoute.snapshot?.params?.approvalCode as string;
    this.emailId = this.activeRoute.snapshot?.params?.emailId as string;
    this.transactionRefId();
  }

  transactionRefId():void{
    this.approvalService.getTransactionRefId(this.declineCode).subscribe(
      response =>{
        this.applicationsDeclineRef = response;
        sessionStorage.setItem('applicationsRefId', this.applicationsDeclineRef.transactionReferenceId);
        if(this.applicationsDeclineRef.statusCode !== '1' ){
          this.DeclineNavigate(this.applicationsDeclineRef.statusCode)?.then();
        }
      },(error:HttpErrorResponse) => {
          this.DeclineNavigate('0')?.then();
        }
    )
  }

  decline():void{
    const declineData:ApproveOrReject = {
      approvalStatus : 'R',
      remark : this.remarks.value as string,
      email: this.emailId
    }

    this.approvalService.approveOrReject(this.declineCode,declineData).subscribe(
      response => {
        this.DeclineNavigate(response.statusCode)?.then();
      },(error:HttpErrorResponse) => {
          this.DeclineNavigate('0')?.then();
        }
    )
  }


  async DeclineNavigate(id:string):Promise<void>{
    if(id == '1'){
      await this.route.navigateByUrl('/sales-charge-approval/decline-successfull');
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
