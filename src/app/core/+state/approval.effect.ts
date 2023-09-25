import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { Action } from "@ngrx/store";
import * as ApprovalAction from '../+state/approval.action';
import { ApprovalService } from "../service/approval.service";
import { FundDocument, SendOtpResponse } from '../models/approval.model';
import { RiskProfileService } from '../../risk-profile/service/risk-profile.service';
import { GetApproveCustTrx, GetDeclineCustTrx } from '../../risk-profile/models/declaration.model'
import { of } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { ApproveSubscribeResponse } from "../../../app/risk-profile/models/risk-profile-summary.model";

@Injectable()
export class ApprovalEffect {

    constructor(
        private actions$: Actions,
        private readonly approvalService: ApprovalService,
        private readonly riskProfileService: RiskProfileService
    ) {}

    approvalSendOtp$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ApprovalAction.RiskProfileSendOtp),
            exhaustMap((action) => {
                return this.approvalService.SendOtp(action.data).pipe(
                    map((response: SendOtpResponse) => {
                        return ApprovalAction.GetApprovalSendOtpSuccess({ data: response }) as Action;
                    }),
                )
            }),

        );
    });

    OtpValidation$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ApprovalAction.RiskProfileOtpValidation),
            exhaustMap((action) => {
                return this.riskProfileService.approveCustTrx(action.data).pipe(
                    map((response: GetApproveCustTrx) => {
                        return ApprovalAction.RiskProfileOtpValidationSuccess({ data: response }) as Action;
                    }),
                    catchError((error:HttpErrorResponse) => of(ApprovalAction.RiskProfileOtpValidationSuccess({ data : error.error as GetApproveCustTrx}) as Action)),
                )
            }),
        );
    });

    Decline$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ApprovalAction.RiskProfileDecline),
            exhaustMap((action) => {
                return this.riskProfileService.declineCustTrx(action.data).pipe(
                    map((response: GetDeclineCustTrx) => {
                        return ApprovalAction.RiskProfileDeclineSuccess({ data: response }) as Action;
                    }),
                )
            }),

        );
    });

    GetFundDocuments$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ApprovalAction.GetFundDocumentsReq),
            exhaustMap((action) => {
                return this.riskProfileService.getFundDocuments(action.data).pipe(
                    map((response: FundDocument[]) => {
                        return ApprovalAction.GetFundDocumentsSuccess({data: response}) as Action;
                    })
                )
            })
        )
    });
    ApprovalSubscribe$ = createEffect(() => {
      return this.actions$.pipe(
          ofType(ApprovalAction.ApproveSubscribeValidation),
          exhaustMap((action) => {
              return this.riskProfileService.customerApplicalReview(action.data).pipe(
                  map((response: ApproveSubscribeResponse) => {
                      return ApprovalAction.ApproveSubscribeSuccess({ data: response }) as Action;
                  }),
              )
          }),

      );
  });

}
