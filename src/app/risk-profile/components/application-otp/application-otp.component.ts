import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ApprovalAction from '../../../core/+state/approval.action';
import * as ApprovalSelector from '../../../core/+state/approval.selector';
import { ApprovalState } from '../../../core/models/approval-state.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SendOtpResponse } from 'src/app/core/models/approval.model';

@Component({
  selector: 'app-application-otp',
  templateUrl: './application-otp.component.html',
  styleUrls: ['./application-otp.component.scss']
})
export class ApplicationOtpComponent {

  approvalOtp = '';
  success = ''
  showOtpComponent = true;
  SendOtpSuccessMsg$: Observable<SendOtpResponse> = this.store.select(ApprovalSelector.riskProfileSendOtpMsg) as Observable<SendOtpResponse>;
  OtpValidation$ = this.store.select(ApprovalSelector.riskProfileOtpValidation);
  requestSendOtp = true;
  minutes!:number;
  seconds!:number;
  @Input() declaration!:boolean;
  @Input() trxType!: string;
  invalid = false;

  configs = {
    length: 6,
    isPasswordInput: true,
    disableAutoFocus: true,
    placeholder: '-',
    formCtrl:true,
    inputStyles: {
      'width': '10px',
      'height': '18px',
      'color':'black',
      "border-color":'black',
      'margin-right': '15px'
    }
  };

  timerInterval: any ;

  constructor(private store:Store<ApprovalState>, public _router: Router ){}


  onOtpChange(otp:string):void {
    this.approvalOtp = otp;
  }

  requestOtp():void{
    const trxId = '105';
    this.store.dispatch(ApprovalAction.RiskProfileSendOtp({data:trxId}))

    this.SendOtpSuccessMsg$.subscribe(response=>{
      if(response.message == 'OTP Sent Successfully'){
        this.requestOtpTimer();
      }
    })
  }

  /* istanbul ignore next */
  requestOtpTimer():void{
    clearInterval(this.timerInterval);
    this.requestSendOtp = false;
    this.minutes = 2;
    this.seconds = 59;
    this.timerInterval = setInterval(() => {
      if(this.seconds == 0 && this.minutes == 0) {
        this.requestSendOtp = true;
      } else if(this.seconds == 0) {
        this.minutes--;
        this.seconds = 60;
      }
      this.seconds--
    }, 1000)
  }

  /* istanbul ignore next */
  confirmAndProceed(): void{
    const payload = {
        approvalCode : "A01",
        transactionId : "1",
        otp : this.approvalOtp
      }
      this.store.dispatch(ApprovalAction.RiskProfileOtpValidation({data:payload}));
      this.OtpValidation$.subscribe((response)=>{
        if(response?.message === 'Success'){
          this.invalid = false;
          this.configs.inputStyles['border-color'] = 'black';
          void this._router.navigate([`/risk-profile/acknowledgment/${this.trxType}`]);
        } else if(response?.message === "Bad request.") {
          this.invalid = true
          this.configs.inputStyles['border-color'] = 'red';
        }
      })
  }

}
