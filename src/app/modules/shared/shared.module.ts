import { NgModule } from '@angular/core';
import { OtpInputComponent } from './components/otp-input/otp-input.component';
import { NgOtpInputModule } from  'ng-otp-input';
import { RatingToRiskProfilePipe } from './pipe/rating-to-profile.pipe';

@NgModule({
    declarations: [OtpInputComponent, RatingToRiskProfilePipe],
    imports: [NgOtpInputModule],
    exports: [OtpInputComponent, RatingToRiskProfilePipe]
})

export class SharedModule { }
