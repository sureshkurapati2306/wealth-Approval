import { Component, ViewChild, OnInit, Output, Input, EventEmitter, SimpleChanges } from '@angular/core';
import { NgOtpInputComponent } from 'ng-otp-input';

@Component({
  selector: 'app-otp-input',
  templateUrl: './otp-input.component.html',
  styleUrls: ['./otp-input.component.scss']
})
export class OtpInputComponent {

  
  public settings = {
    length: 6,
    numbersOnly: true,
  }
  confirmEnable = false;
  otpConfig = {
    length:6, 
    isPasswordInput: true, 
    allowNumbersOnly: true,
    disableAutoFocus: true, 
    placeholder: '-',
    inputStyles: {
      'color':'black',
      "border-color":'black',
    }
  }
  @Input() otpValError = false;
  @ViewChild(NgOtpInputComponent, { static: false})
  public ngOtpInput: NgOtpInputComponent | undefined;
  @Output() otpEntered = new EventEmitter<string>();
    
  
  ngOnChanges(changes: SimpleChanges) {
    const cls = document.getElementsByTagName('ng-otp-input')[0];
    if(this.otpValError){
      cls.classList.remove('border_black') 
      cls.classList.add('border_red')
    }
    else{
      cls.classList.remove('border_red')
      cls.classList.add('border_black') 
    } 
  }
  public onInputChange(e: string): void {
    this.otpValError = false;
       this.otpValueChange(e);
  }

  otpValueChange(e: any) : void {
    this.otpEntered.emit(e);
  }
}
