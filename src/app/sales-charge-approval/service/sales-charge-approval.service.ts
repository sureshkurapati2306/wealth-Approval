import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError,map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { ApproveOrReject, GetTransactionRefId } from './../models/sales-charge-approval.model';


@Injectable({
  providedIn: 'root'
})
export class SalesChargeApprovalService {

  constructor(private http:HttpClient){}
  
  getTransactionRefId(approvalCode: string):Observable<GetTransactionRefId> {
    return this.http
      .get<GetTransactionRefId>(`${environment.apiUrl}/rma/getTransactionRefId/${approvalCode}`)
        .pipe(
          map(response =>{
          return response
          }),
          catchError((error: HttpErrorResponse) => {
            return throwError(() => error);
          })
      );
  }
  
  approveOrReject(approvalCode:string, data: ApproveOrReject):Observable<GetTransactionRefId> {
    return this.http
      .put<GetTransactionRefId>(`${environment.apiUrl}/rma/approveOrRejectTxnStatus/${approvalCode}`,data)
        .pipe(
          map(response =>{
          return response
          }),
          catchError((error: HttpErrorResponse) => {
            return throwError(() => error);
          })
      );
  }
  
}
