import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError,map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { GetTandCList, GetTncContent, SendOtpResponse } from '../models/approval.model';

@Injectable({
  providedIn: 'root'
})
export class ApprovalService {

  constructor(private http:HttpClient){}
   
  getTandCList(trxType: string):Observable<GetTandCList[]> {
    return this.http
      .get<GetTandCList[]>(`${environment.apiUrl}/rma/getTncByTrxType/${trxType}`)
        .pipe(
          map(response =>{
          return response
          }),
          catchError((error: HttpErrorResponse) => {
            return throwError(error);
          })
      );
  }

  getTandCContent(tncId: number):Observable<GetTncContent> {
    return this.http
      .get<GetTncContent>(`${environment.apiUrl}/rma/getTncContentById/${tncId}`)
        .pipe(
          map(response =>{
          return response
          }),
          catchError((error: HttpErrorResponse) => {
            return throwError(error);
          })
      );
  }

  SendOtp(tncId: string):Observable<SendOtpResponse> {
    return this.http
      .get<SendOtpResponse>(`${environment.apiUrl}/rma/sendOtp/${tncId}`)
        .pipe(
          map(response =>{
          return response
          }),
          catchError((error: HttpErrorResponse) => {
            return throwError(error);
          })
      );
  }
}


