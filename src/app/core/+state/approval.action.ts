import { createAction, props } from '@ngrx/store';
import { FundDocument, SendOtpResponse } from '../models/approval.model';
import { ApproveCustTrx, GetApproveCustTrx, DeclineCustTrx, GetDeclineCustTrx } from '../../risk-profile/models/declaration.model'
import { ApproveSubscribeRequest, ApproveSubscribeResponse } from '../../../app/risk-profile/models/risk-profile-summary.model';

export const RiskProfileSendOtp = createAction(
    '[RiskProfileApproval/API] Send Otp ',
    props<{ data: string }>(),
);

export const GetApprovalSendOtpSuccess = createAction(
    '[RiskProfileApproval/API] Get Approval Send Otp Success',
    props<{ data: SendOtpResponse }>(),
);

export const RiskProfileOtpValidation = createAction(
    '[RiskProfileApproval/API] Risk Profile Otp Validation',
    props<{ data: ApproveCustTrx }>(),
);

export const RiskProfileOtpValidationSuccess = createAction(
    '[RiskProfileApproval/API] Risk Profile Otp Validation Success',
    props<{ data: GetApproveCustTrx }>(),
);

export const RiskProfileDecline = createAction(
    '[RiskProfileApproval/API] Risk Profile Decline',
    props<{ data: DeclineCustTrx }>(),
);

export const RiskProfileDeclineSuccess = createAction(
    '[RiskProfileApproval/API] Risk Profile Decline Success',
    props<{ data: GetDeclineCustTrx }>(),
);

export const GetFundDocumentsReq = createAction(
    '[FundDocuments/API] Get Fund Documents Req',
    props<{data: string}>(),
)

export const GetFundDocumentsSuccess = createAction(
    '[FundDocuments/API] Get Fund Documents',
    props<{ data: FundDocument[] }>(),
);

export const ApproveSubscribeValidation = createAction (
  '[RiskProfileApproval/API] Approve Subscribe Validation',
  props<{data: ApproveSubscribeRequest}>(),
);

export const getApproveSubscribeResponse = createAction (
  '[RiskProfileApproval/API] Approve Subscribe  ',
  props<{data: ApproveSubscribeResponse}>(),
);

export const ApproveSubscribeSuccess = createAction (
  '[RiskProfileApproval/API] Approve Subscribe Success',
  props<{data: ApproveSubscribeResponse}>(),
);
