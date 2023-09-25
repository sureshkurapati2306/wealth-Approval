import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SalesChargeApprovalRoutingModule } from './sales-charge-approval-routing.module';
import { SalesChargeSystemErrorComponent } from './components/sales-charge-system-error/sales-charge-system-error.component';
import { ApprovalComponent } from './components/approval/approval.component';
import { ApprovalSuccessfullComponent } from './components/approval-successfull/approval-successfull.component';
import { DeclineComponent } from './components/decline/decline.component';
import { DeclineSuccessfullComponent } from './components/decline-successfull/decline-successfull.component';
import { ApprovalToPoComponent } from './components/approval-to-po/approval-to-po.component';
import { CheckApprovedComponent } from './components/check-approved/check-approved.component';
import { CheckRejectedComponent } from './components/check-rejected/check-rejected.component';
import { FeesWaiverApprovedComponent } from './components/fees-waiver-approved/fees-waiver-approved.component';
import { FeesWaiverRejectedComponent } from './components/fees-waiver-rejected/fees-waiver-rejected.component';
import { SalesChargeApprovalService } from './service/sales-charge-approval.service';
import { ApplicationExpiredComponent } from './components/application-expired/application-expired.component';
@NgModule({
  declarations: [
    SalesChargeSystemErrorComponent,
    ApprovalComponent,
    ApprovalSuccessfullComponent,
    DeclineComponent,
    DeclineSuccessfullComponent,
    ApprovalToPoComponent,
    CheckApprovedComponent,
    CheckRejectedComponent,
    FeesWaiverApprovedComponent,
    FeesWaiverRejectedComponent,
    ApplicationExpiredComponent,

  ],
  imports: [
    CommonModule,
    SalesChargeApprovalRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[SalesChargeApprovalService]
})
export class SalesChargeApprovalModule { }
