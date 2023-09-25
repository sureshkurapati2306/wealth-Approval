import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ApprovalStateKeys} from '../models/approval-state.model';
import { APPROVAL_FEATURE_KEY } from '../+state/approval.reducer'

const getAvailableFundsState = createFeatureSelector<ApprovalStateKeys>(
    APPROVAL_FEATURE_KEY
);

export const riskProfileSendOtpMsg = createSelector(getAvailableFundsState, (state)=>{
        return state.riskProfileSendOtpMsg ? state.riskProfileSendOtpMsg : null
    }
);

export const riskProfileOtpValidation = createSelector(getAvailableFundsState, (state)=>{
        return state.riskProfileAcknowledgment ? state.riskProfileAcknowledgment : null
    }
);

export const riskProfileDecline = createSelector(getAvailableFundsState, (state)=>{
        return state.riskProfileDecline ? state.riskProfileDecline : null
    }
);

export const getFundDocumentsSuccess = createSelector(getAvailableFundsState, (state)=>{
        return state.fundDocument ? state.fundDocument : null
    }
);

export const approveSubscribed = createSelector(getAvailableFundsState, (state)=>{
      return state.approveSubscribeApproved ? state.approveSubscribeApproved : null
    }
);
