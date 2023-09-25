import { MatDialog } from '@angular/material/dialog';
import { OtpblockedComponent } from './../otpblocked/otpblocked.component';
import { Component, OnInit, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OtpService } from '../sales-charge-approval/service/otp.service'
import { getOtpResponse } from '../sales-charge-approval/models/otp-input.model'
import { confirmOtpResponse } from '../sales-charge-approval/models/otp-input.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})


export class OtpComponent implements OnInit {
  title = 'cimb';
  confirmEnable = false;
  timer = 20;

  requestEnable = true;
  timerInterval: any;
  otpError = false;
  otpValue = 0;
  trialCount = 0;
  startingMinutes = 10;
  time = 180;
  seconds = 59;
  minutes = 2;

  constructor(
    public httpClient: HttpClient,
    public otpService: OtpService,
    public router: Router,
    private dialog: MatDialog
  ) {}

  otpEnter(e: string): void {
    this.otpValue = Number(e);
    if (e.length == 6) {
      this.confirmEnable = true;
    } else {
      this.otpError = false;
    }
  }

  confirmOtp(): void {
    const otpEntered = this.otpValue;
    const mobileNumer = "01123274241"
    const reqObj = {
      "mobileNumber": mobileNumer,
      "otp": otpEntered,
    };

    this.otpService.confirmOtp(reqObj).subscribe((res: confirmOtpResponse) => {
      if (res.message == 'OTP Verification Successful') {
        this.otpError = false;
      } else {
        this.otpError = true;
        this.trialCount = this.trialCount + 1;
        /* istanbul ignore else */
        if (this.trialCount == 3) {
          this.dialog.open(OtpblockedComponent)
        }
      }

    })

  }

  requestOtp(): void {
    this.time = 180;
    this.seconds = 59;
    this.minutes = 2;
    this.requestEnable = false;
    this.getOtp();
    this.timerInterval = setInterval(() => {
      this.updateCountdown()
      if (this.minutes == 0 && this.seconds == 0) {
        clearInterval(this.timerInterval)
        this.requestEnable = true;
      }
    }, 1000)
  }

  ngOnInit(): void {
    this.confirmEnable = false;
  }

  getOtp(): void {
    const reqObj = {
      "mobileNumber": "01123274241"
    };
    this.otpService.getOtp(reqObj).subscribe((res: getOtpResponse) => {
      alert(res.message)
    })
  }

  updateCountdown(): void {
    this.minutes = Math.floor(this.time / 60);
    this.seconds = this.time % 60;
    this.time--;
  }
}
