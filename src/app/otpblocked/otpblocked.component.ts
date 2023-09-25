import { Component } from '@angular/core';

@Component({
  selector: 'app-otpblocked',
  templateUrl: './otpblocked.component.html',
  styleUrls: ['./otpblocked.component.scss']
})
export class OtpblockedComponent {

  /* istanbul ignore next */
  canceling(): void {
    window.location.reload();
  }
}
