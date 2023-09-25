import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DeclineDialogComponent } from '../decline-dialog/decline-dialog.component';
import { FundDocumentDownloadModalComponent } from '../fund-document-download-modal/fund-document-download-modal.component';
import * as ApprovalAction from '../../../core/+state/approval.action';
import * as ApprovalSelector from '../../../core/+state/approval.selector';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-approve-subscribe',
  templateUrl: './approve-subscribe.component.html',
  styleUrls: ['./approve-subscribe.component.scss'],
})
export class ApproveSubscribeComponent implements OnInit {

  approvalSubscribe$ = this.store.select(ApprovalSelector.approveSubscribed).pipe(
    filter(data => !!data)
  )

approved = this.approvalSubscribe$;

  ngOnInit(): void {
    const appCodeSub = { approvalCode: '530c4bd6-bf69-4798-a9ab-eb7f91cc13f3' };
    this.store.dispatch(
      ApprovalAction.ApproveSubscribeValidation({ data: appCodeSub })
    );
  }

  constructor(
    private store: Store,
    public readonly dialog: MatDialog,
    private readonly router: Router
  ) {}

  customerId = "CA xxxxxxx8881 (Join - Or)";
  para =
    'Please review and confirm your Unit Trust subscription details. You may decline this application if you wish to make changes or approve to proceed with it. Suitable for investors with the longest time horizon. This portfolio has a higher allocation of equityand high risk investments, and is most susceptible to market volatility. This is a good allocation if you are an experienced investor and can handle market fluctuations including downturns for potentially higher returns in the longer term.';

  decline(): void {
    this.openDecline().subscribe((response) => {
      if (response) {
        void this.router.navigate(['/risk-profile/decline']);
      }
    });
  }

  openDecline(): Observable<boolean> {
    return this.dialog
      .open(DeclineDialogComponent, {
        panelClass: ['custom-dialog', 'decline-dialog'],
        minWidth: '100%',
        maxWidth: '100%',
        minHeight: '100vh',
        height: '100vh',
        width: '100%',
        autoFocus: false,
        backdropClass: 'backdrop-modal',
      })
      .afterClosed() as Observable<boolean>;
  }

  openFundDocumentsModal(): void {
    this.dialog.open(FundDocumentDownloadModalComponent, {
      panelClass: ['custom-dialog', 'document-dialog'],
        minWidth: '',
        maxWidth: '100%',
        minHeight: '',
        height: '100%',
        width: '100%',
        autoFocus: false,
        backdropClass: 'backdrop-modal',
        disableClose: false,
        data: {
          title: 'Fund Documents',
          description: '',
          fundCode: 'FD123'
        }
    }).afterClosed().subscribe((btnName) => {
      if(btnName === 'Close') {
        this.dialog.closeAll();
      }
    })
  }
}
