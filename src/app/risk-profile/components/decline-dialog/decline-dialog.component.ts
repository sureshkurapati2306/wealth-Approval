/* eslint-disable @typescript-eslint/unbound-method */
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as ApprovalAction from '../../../core/+state/approval.action';
import * as ApprovalSelector from '../../../core/+state/approval.selector';
import { Observable } from 'rxjs';
import { GetDeclineCustTrx } from '../../models/declaration.model';

@Component({
  selector: 'app-decline-dialog',
  templateUrl: './decline-dialog.component.html',
  styleUrls: ['./decline-dialog.component.scss']
})
export class DeclineDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeclineDialogComponent>, private store:Store){}
  reason: FormControl = new FormControl('', [Validators.required, Validators.maxLength(500)]);

  riskProfileDecline$: Observable<GetDeclineCustTrx> = this.store.select(ApprovalSelector.riskProfileDecline) as Observable<GetDeclineCustTrx>

  ngOnInit(): void {
    this.reason.valueChanges
    .pipe(
        tap((remark: string) => {
            /* istanbul ignore else */
            if (remark.length > 500) {
                this.reason.setValue(remark.substring(0, 500));
            }
        }),
    )
    .subscribe();
  }

  declineSubmit():void{
    const DeclinePayload = {
      approvalCode : "A01",
      transactionId : "1",
      remarks : this.reason.value as string
    }
    this.store.dispatch(ApprovalAction.RiskProfileDecline({data:DeclinePayload}));

    this.riskProfileDecline$.subscribe((res)=>{
      if(res){
        this.dialogRef.close(true);
      }
    })
  }

}
