import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OtpComponent } from './otp.component';
import { OtpblockedComponent } from '../otpblocked/otpblocked.component';
const routes: Routes = [
    {path: '', component: OtpComponent},
    {path: 'otpblock', component: OtpblockedComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
 // exports: [RouterModule]
})
export class OtpRoutingModule { }
