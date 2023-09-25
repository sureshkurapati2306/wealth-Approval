import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FundDocument } from 'src/app/core/models/approval.model';
import { RiskProfileService } from '../../service/risk-profile.service';
import { saveAs } from 'file-saver';
import { HttpErrorResponse } from '@angular/common/http';
import { SnackBarService } from '../../service/snack-bar.service';
import { ApprovalState } from 'src/app/core/models/approval-state.model';
import { Store } from '@ngrx/store';
import * as ApprovalAction from '../../../core/+state/approval.action';
import * as ApprovalSelector from '../../../core/+state/approval.selector';
import { Observable } from 'rxjs';

export interface FundDocumentDialogData {
  title: 'Fund Documents',
  fundCode: ''
}

@Component({
  selector: 'app-fund-document-download-modal',
  templateUrl: './fund-document-download-modal.component.html',
  styleUrls: ['./fund-document-download-modal.component.scss']
})
export class FundDocumentDownloadModalComponent implements OnInit {

  //Default values
  dialogData: FundDocumentDialogData = {
    title: 'Fund Documents',
    fundCode: ''
  };

  documents: FundDocument[] = [] as FundDocument[];
  fundCode = "";
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  fundDocuments$: Observable<FundDocument[] | null> = this.store.select(ApprovalSelector.getFundDocumentsSuccess);

  constructor(
    @Inject(MAT_DIALOG_DATA) data: Partial<FundDocumentDialogData>,
    public dialogRef: MatDialogRef<FundDocumentDownloadModalComponent>,
    private riskProfileService: RiskProfileService,
    private readonly sanckbarService: SnackBarService,
    private store: Store<ApprovalState>
  ) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    this.dialogData = {
      ...this.dialogData,
      ...data,
    };
  }

  ngOnInit(): void {
    this.getDocuments();
  }

  getDocuments(): void {
    this.fundCode = this.dialogData?.fundCode;
    this.store.dispatch(ApprovalAction.GetFundDocumentsReq({data:this.fundCode}))
    this.fundDocuments$.subscribe(response => {
      this.documents = response as FundDocument[];
    })
  }

  close(): void {
    this.sanckbarService.closeSnackBar();
    this.dialogRef.close(true);
  }

  downloadDocument(document: FundDocument): void {
    this.riskProfileService.downloadDocument(document).subscribe(res => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        saveAs(res,`${document.documentName}.pdf`);
        this.sanckbarService.openSnackBar("Fund document downloaded successfully!", 'success');
    }, (err: Error | HttpErrorResponse) => {
        console.log(err);
        this.sanckbarService.openSnackBar("Fund document failed to download. Please try again.", 'warning');
    })
  }
}
