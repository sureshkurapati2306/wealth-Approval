import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApproveOrReject } from '../../models/sales-charge-approval.model';
import { SalesChargeApprovalService } from '../../service/sales-charge-approval.service';

@Component({
  selector: 'app-approval-to-po',
  templateUrl: './approval-to-po.component.html',
  styleUrls: ['./approval-to-po.component.scss']
})
export class ApprovalToPoComponent implements OnInit{
  poApprovalCode!: string;
  applicationsRefId!:string;
  poEmailId!:string;

  constructor(
    private readonly activeRoute: ActivatedRoute,
    private route:Router,
    private approvalService:SalesChargeApprovalService
    ) { }

    ngOnInit(): void {
      this.poApprovalCode = this.activeRoute.snapshot?.params?.approvalCode as string;
      this.poEmailId = this.activeRoute.snapshot?.params?.emailId as string;
      const poApprovalData:ApproveOrReject = {
        approvalStatus : 'A',
        email: this.poEmailId
      }
      
      this.approvalService.approveOrReject(this.poApprovalCode,poApprovalData).subscribe(
        response =>{
          this.applicationsRefId = response.transactionReferenceId;
          this.navigate(response.statusCode)?.then()
        },(error:HttpErrorResponse) => {
            this.navigate('0')?.then();
          }
        )
    }

    async navigate(id:string):Promise<void>{
      if(id == '0'){
        await this.route.navigateByUrl('/sales-charge-approval/system-error');
      } else if(id == '-1'){
        await this.route.navigateByUrl('/sales-charge-approval/check-rejected');
      } else if(id == '2'){
        await this.route.navigateByUrl('/sales-charge-approval/check-approved');
      } else if(id == '3'){
        await this.route.navigateByUrl('/sales-charge-approval/application-expired');
      }
    }
   
}

