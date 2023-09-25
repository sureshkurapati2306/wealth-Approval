import { createReducer, on } from "@ngrx/store";
import * as ApprovalAction from '../+state/approval.action';
import { MockInitialState } from '../mock/approval.mock'

export const APPROVAL_FEATURE_KEY = 'Approval';

export const ApprovalReducer = createReducer(
    MockInitialState,
    on(ApprovalAction.GetApprovalSendOtpSuccess, (state, action) => {
        return {
            ...state,
            riskProfileSendOtpMsg: action.data
        }
    }),
    on(ApprovalAction.RiskProfileOtpValidationSuccess, (state, action) => {
        return {
            ...state,
            riskProfileAcknowledgment: action.data
        }
    }),
    on(ApprovalAction.RiskProfileDeclineSuccess, (state, action) => {
        return {
            ...state,
            riskProfileDecline: action.data
        }
    }),
    on(ApprovalAction.GetFundDocumentsSuccess, (state, action) => {
        return {
            ...state,
            fundDocument: action.data
        }
    }),
    on(ApprovalAction.ApproveSubscribeSuccess, (state, action) => {
      return {
          ...state,
          approveSubscribeApproved: action.data
      }
  })
)
