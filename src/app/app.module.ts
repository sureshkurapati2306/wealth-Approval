import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApprovalEffect} from '../app/core/+state/approval.effect';
import * as CommonReducer from '../app/core/+state/approval.reducer';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatDividerModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({Approval:CommonReducer.ApprovalReducer}),
    StoreDevtoolsModule.instrument({
      name: 'MS-SSO',
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([ApprovalEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
