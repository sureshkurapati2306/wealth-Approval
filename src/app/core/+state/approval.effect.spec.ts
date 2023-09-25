import { TestBed } from "@angular/core/testing";
import { provideMockActions } from "@ngrx/effects/testing";
import { Action } from "@ngrx/store";
import { provideMockStore } from "@ngrx/store/testing";
import { Observable, of } from "rxjs";
import { MockSendOtpResponse,
   MockInitialState,
   MockOtpValidationResponse,
   MockOtpValidationPayload,
   MockDeclineResponse,
   MockDeclinePayload, 
   MockGetFundDocumentsSuccess,
   MockGetFundDocumentsReq} from "../mock/approval.mock";
import { ApprovalService } from "../service/approval.service";
import { ApprovalEffect } from "../+state/approval.effect";
import * as ApprovalAction from '../+state/approval.action';
import { RiskProfileService } from '../../risk-profile/service/risk-profile.service'
import { MockApproveSubscribeRequest, MockApproveSubscribeResponse } from "../../../app/risk-profile/mock/risk-profile-questionire.mock";

class MockApprovalService {
  SendOtp() { /* mock */ }
}

class MockRiskProfileService {
  approveCustTrx() { /* mock */ }
  customerApplicalReview() { /* mock */ }
  declineCustTrx() { /* mock */ }
  getFundDocuments() {/* mock */}
}


describe('ApprovalEffect', () => {
    let actions: Observable<Action>;
    let effects: ApprovalEffect;
    let approvalService: ApprovalService;
    let riskProfileService: RiskProfileService

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [
              ApprovalEffect,
              provideMockActions(() => actions),
              provideMockStore({ initialState: MockInitialState }),
              {
                provide: ApprovalService, useClass: MockApprovalService
              },
              {
                provide: RiskProfileService, useClass: MockRiskProfileService
              },
           ],
        });

        effects = TestBed.inject(ApprovalEffect);
        approvalService = TestBed.inject(ApprovalService);
        riskProfileService = TestBed.inject(RiskProfileService);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });

    it('should riskProfile SendOtp success status', (done) => {
        const spy = jest.spyOn(approvalService, 'SendOtp').mockReturnValue(of(MockSendOtpResponse));

        actions = of(ApprovalAction.RiskProfileSendOtp({
          data: ''
        }));

        effects.approvalSendOtp$
          .subscribe(action => {
            expect(action).toEqual(ApprovalAction.GetApprovalSendOtpSuccess({
              data: MockSendOtpResponse
            }));
            expect(spy).toHaveBeenCalledTimes(1);
            done();
          });
      });

      it('should riskProfile otp validation success status', (done) => {
        const spy = jest.spyOn(riskProfileService, 'approveCustTrx').mockReturnValue(of(MockOtpValidationResponse));

        actions = of(ApprovalAction.RiskProfileOtpValidation({
          data: MockOtpValidationPayload
        }));

        effects.OtpValidation$
          .subscribe(action => {
            expect(action).toEqual(ApprovalAction.RiskProfileOtpValidationSuccess({
              data: MockOtpValidationResponse
            }));
            expect(spy).toHaveBeenCalledTimes(1);
            done();
          });
      });

      it('should riskProfile decline success status', (done) => {
        const spy = jest.spyOn(riskProfileService, 'declineCustTrx').mockReturnValue(of(MockDeclineResponse));

        actions = of(ApprovalAction.RiskProfileDecline({
          data: MockDeclinePayload
        }));

        effects.Decline$
          .subscribe(action => {
            expect(action).toEqual(ApprovalAction.RiskProfileDeclineSuccess({
              data: MockDeclineResponse
            }));
            expect(spy).toHaveBeenCalledTimes(1);
            done();
          });
      });

      it('should get fund documents successfully', (done) => {
        const spy = jest.spyOn(riskProfileService, 'getFundDocuments').mockReturnValue(of(MockGetFundDocumentsSuccess));

        actions = of(ApprovalAction.GetFundDocumentsReq({
          data: MockGetFundDocumentsReq.fundCode
        }));

        effects.GetFundDocuments$
          .subscribe(action => {
            expect(action).toEqual(ApprovalAction.GetFundDocumentsSuccess({
              data: MockGetFundDocumentsSuccess
            }));
            expect(spy).toHaveBeenCalledTimes(1);
            done();
          });
      });
      it('should approve subscribe success status', (done) => {
        const spy = jest.spyOn(riskProfileService, 'customerApplicalReview').mockReturnValue(of(MockApproveSubscribeResponse));

        actions = of(ApprovalAction.ApproveSubscribeValidation({
          data: MockApproveSubscribeRequest
        }));

        effects.ApprovalSubscribe$
          .subscribe(action => {
            expect(action).toEqual(ApprovalAction.ApproveSubscribeSuccess({
              data: MockApproveSubscribeResponse
            }));
            expect(spy).toHaveBeenCalledTimes(1);
            done();
          });
      });
})
