import { NgModule } from '@angular/core';
import { OtpComponent } from './otp.component';
import { OtpblockedComponent } from '../otpblocked/otpblocked.component';
import { OtpRoutingModule } from './otp-routing.module';
import { CommonModule } from '@angular/common';
import { OtpService } from '../sales-charge-approval/service/otp.service'
import { SharedModule } from '../modules/shared/shared.module';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
    declarations: [OtpComponent, OtpblockedComponent],
    imports: [
        CommonModule,
        OtpRoutingModule,
        SharedModule,
        MatDialogModule
    ],
    providers: [OtpService]
 })

 export class OtpModule {}