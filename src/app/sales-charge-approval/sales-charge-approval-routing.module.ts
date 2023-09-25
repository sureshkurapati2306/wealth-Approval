import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationExpiredComponent } from './components/application-expired/application-expired.component';
import { ApprovalSuccessfullComponent } from './components/approval-successfull/approval-successfull.component';
import { ApprovalToPoComponent } from './components/approval-to-po/approval-to-po.component';
import { ApprovalComponent } from './components/approval/approval.component';
import { CheckApprovedComponent } from './components/check-approved/check-approved.component';
import { CheckRejectedComponent } from './components/check-rejected/check-rejected.component';
import { DeclineSuccessfullComponent } from './components/decline-successfull/decline-successfull.component';
import { DeclineComponent } from './components/decline/decline.component';
import { FeesWaiverApprovedComponent } from './components/fees-waiver-approved/fees-waiver-approved.component';
import { FeesWaiverRejectedComponent } from './components/fees-waiver-rejected/fees-waiver-rejected.component';
import { SalesChargeSystemErrorComponent } from './components/sales-charge-system-error/sales-charge-system-error.component';


const routes: Routes = [
  { path: "approval-confirmation/:approvalCode/:emailId", component: ApprovalComponent },
  { path: "approval-confirmation-po/:approvalCode/:emailId", component: ApprovalComponent },
  { path: "approval-successfull", component: ApprovalSuccessfullComponent },
  { path: "decline/:approvalCode/:emailId", component: DeclineComponent },
  { path: "decline-po/:approvalCode/:emailId", component: DeclineComponent },
  { path: "decline-successfull", component: DeclineSuccessfullComponent },
  { path: "approval-po-successful/:approvalCode/:emailId", component: ApprovalToPoComponent },
  { path: "system-error", component: SalesChargeSystemErrorComponent },
  { path: "check-approved", component: CheckApprovedComponent },
  { path: "check-rejected", component: CheckRejectedComponent },
  { path: "fee-waiver-approved", component: FeesWaiverApprovedComponent },
  { path: "fee-waiver-rejected", component: FeesWaiverRejectedComponent },
  { path: "application-expired", component: ApplicationExpiredComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesChargeApprovalRoutingModule { }
