import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ApprovalConfirmationComponent } from "./components/approval-confirmation/approval-confirmation.component";
import { ApproveSubscribeComponent } from "./components/approve-subscribe/approve-subscribe.component";
import { DeclarationComponent } from "./components/declaration/declaration.component";
import { DeclineComponent } from "./components/decline/decline.component";
import { RiskProfileDetailComponent } from "./components/risk-profile-detail/risk-profile-detail.component";
import { ApplicationReviewComponent } from './components/application-review/application-review.component';
import { AcknowledgmentComponent } from './components/acknowledgment/acknowledgment.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'risk-profile-detail', pathMatch: 'full'
  },
  {
    path: 'risk-profile-detail', component: RiskProfileDetailComponent
  },
  {
    path: 'declaration', component: DeclarationComponent
  },
  {
    path: 'confirmation', component: ApprovalConfirmationComponent,
  },
  {
    path: 'decline', component: DeclineComponent
  },
  { path: "approve-subscribe", component: ApproveSubscribeComponent },
  {
    path: "application-review/:trxId", component: ApplicationReviewComponent
  },
  {
    path: "acknowledgment/:trxId", component: AcknowledgmentComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RiskProfileRouting { }
