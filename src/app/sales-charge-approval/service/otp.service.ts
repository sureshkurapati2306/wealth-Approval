import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError,map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { getOtpResponse } from '../models/otp-input.model';
import { confirmOtpResponse } from '../models/otp-input.model';

@Injectable()
export class OtpService {

  constructor(private http:HttpClient){}
  

  getOtp(reqObj: any): Observable<getOtpResponse> {
    return this.http.post<getOtpResponse>(`${environment.apiUrl}/otp/otp`, reqObj)
        .pipe(
            map(response => {
                return response
            }),
            catchError((error: HttpErrorResponse) => {
                return throwError(error);
            })
        )
  }

  confirmOtp(reqObj: any): Observable<confirmOtpResponse> {
    return this.http.post<confirmOtpResponse>(`${environment.apiUrl}/otp/otp/verify`, reqObj)
        .pipe(
            map(response => {
                return response
            }),
            catchError((error: HttpErrorResponse) => {
                return throwError(error);
            })
        )
  }
  
}
