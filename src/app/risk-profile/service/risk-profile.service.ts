import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable, throwError } from 'rxjs';
import { catchError,map } from 'rxjs/operators';
import { FundDocument } from '../../../app/core/models/approval.model';
import { environment } from '../../../environments/environment';
import { ApproveCustTrx, GetApproveCustTrx, GetDeclineCustTrx, DeclineCustTrx } from '../models/declaration.model';
import { RPQuestionaireResponse, RPQuestionnaireRequest } from '../models/risk-inquiry-detail.model';
import { ApproveSubscribeRequest, ApproveSubscribeResponse } from '../models/risk-profile-summary.model';

@Injectable({
  providedIn: 'root'
})
export class RiskProfileService {

  constructor(private http: HttpClient) { }

  getQuestions(payload: RPQuestionnaireRequest): Observable<RPQuestionaireResponse> {
    return this.http.post<RPQuestionaireResponse>(`${environment.apiUrl}/rws/riskprofilequestionandanswers`, payload);
  }

  approveCustTrx(body: ApproveCustTrx): Observable<GetApproveCustTrx> {
    return this.http.post<GetApproveCustTrx>(`${environment.apiUrl}/rma/approveCustTrx`, body)
      .pipe(
        map(response =>{
        return response
        }),
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
      );
  }

  declineCustTrx(body: DeclineCustTrx):Observable<GetDeclineCustTrx> {
    return this.http
      .post<GetDeclineCustTrx>(`${environment.apiUrl}/rma/declineCustTrx`,body)
        .pipe(
          map(response =>{
          return response
          }),
          catchError((error: HttpErrorResponse) => {
            return throwError(error);
          })
      );
  }

  getFundDocuments(fundCode: string): Observable<FundDocument[]> {
    const url = `${environment.apiUrl}/emanager/fund/getFundDocuments?fundCode=${fundCode}`;
    return this.http.get<{ fundDocument: FundDocument[] }>(url).pipe(
        map((response: { fundDocument: FundDocument[] }) => response.fundDocument),
        catchError((error: HttpErrorResponse) => {
            return throwError(error);
        })
    )
  }

  downloadDocument(document: FundDocument): Observable<any> {
    const headers = new HttpHeaders(
        { 'content-type': 'application/json' }
    );
    const url = `${environment.apiUrl}/validate/document-mappings/getDocument`;
    return this.http.post<any>(url,
        {
            fileUrl: document.msUrl,
            fileName: document.documentName
        },
        {
            responseType: 'blob' as 'json',
            headers: headers,
        }
    ).pipe(
        map(
            (res) => {
                return new Blob([res], { type: 'application/pdf' });
            }),
        catchError((error: HttpErrorResponse) => {
            return throwError(error);
        }),
    )
}

  customerApplicalReview(body: ApproveSubscribeRequest):Observable<ApproveSubscribeResponse> {
    return this.http.post<ApproveSubscribeResponse>(`${environment.apiUrl}/rma/getCustomerApplicalReview`,body)
    .pipe(map((response: ApproveSubscribeResponse) =>{
      return response
    }),
    catchError((error: HttpErrorResponse) => {
      return throwError(error);
    }));
  }
}
