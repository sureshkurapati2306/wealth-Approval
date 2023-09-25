import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import * as ApprovalSelector from '../../../core/+state/approval.selector';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-acknowledgment',
  templateUrl: './acknowledgment.component.html',
  styleUrls: ['./acknowledgment.component.scss']
})
export class AcknowledgmentComponent implements OnInit{

  acknowledgment$ = this.store.select(ApprovalSelector.riskProfileOtpValidation);
  trnxType = ''

  constructor(private store:Store, private readonly activeRoute: ActivatedRoute){}
  ngOnInit(): void {
    this.trnxType = this.activeRoute.snapshot?.params?.trxId as string;
  }

}
