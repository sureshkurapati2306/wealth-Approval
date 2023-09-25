import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RiskProfileRouting } from './risk-profile-routing.module';
import { RiskProfileDetailComponent } from './components/risk-profile-detail/risk-profile-detail.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { DeclarationComponent } from './components/declaration/declaration.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ApprovalConfirmationComponent } from './components/approval-confirmation/approval-confirmation.component';
import { DeclineComponent } from './components/decline/decline.component';
import { DeclineDialogComponent } from './components/decline-dialog/decline-dialog.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ApproveSubscribeComponent } from './components/approve-subscribe/approve-subscribe.component';
import { ApplicationReviewComponent } from './components/application-review/application-review.component';
import { ApplicationOtpComponent } from './components/application-otp/application-otp.component';
import { InvestorDeclarationComponent } from './components/investor-declaration/investor-declaration.component';
import { AcknowledgmentComponent } from './components/acknowledgment/acknowledgment.component';
import { NgOtpInputModule } from  'ng-otp-input';
import { FundDocumentDownloadModalComponent } from './components/fund-document-download-modal/fund-document-download-modal.component';
import { CustomSnackbarComponent } from './components/custom-snackbar/custom-snackbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackBarService } from './service/snack-bar.service';

import {MatTabsModule} from '@angular/material/tabs';
import { SharedModule } from '../modules/shared/shared.module';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    RiskProfileDetailComponent,
    DeclarationComponent,
    ApprovalConfirmationComponent,
    DeclineComponent,
    DeclineDialogComponent,
    ApproveSubscribeComponent,
    ApplicationReviewComponent,
    ApplicationOtpComponent,
    InvestorDeclarationComponent,
    AcknowledgmentComponent,
    FundDocumentDownloadModalComponent,
    CustomSnackbarComponent
  ],
  imports: [
    CommonModule,
    RiskProfileRouting,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatExpansionModule,
    NgOtpInputModule,
    MatSnackBarModule,
    MatTabsModule,
    SharedModule,
    MatGridListModule
  ],
  providers: [
    SnackBarService
  ]
})
export class RiskProfileModule { }
