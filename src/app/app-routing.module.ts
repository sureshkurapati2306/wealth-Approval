import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgOtpInputModule } from 'ng-otp-input';

const routes: Routes = [
  {
    path: 'sales-charge-approval',
    loadChildren: () => import('./sales-charge-approval/sales-charge-approval.module').then(m => m.SalesChargeApprovalModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('src/app/otp/otp.module').then(m => m.OtpModule)
  },
  {
    path: 'risk-profile',
    loadChildren: () => import('./risk-profile/risk-profile.module').then(m => m.RiskProfileModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: "enabled" }),
    NgOtpInputModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
