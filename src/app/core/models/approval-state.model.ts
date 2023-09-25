import { SendOtpResponse, GetTandCList, FundDocument,} from './approval.model'
import { GetApproveCustTrx, GetDeclineCustTrx } from '../../risk-profile/models/declaration.model'
import { ApproveSubscribeResponse } from 'src/app/risk-profile/models/risk-profile-summary.model';
export interface ApprovalState {
    Approval:ApprovalStateKeys

}

export interface ApprovalStateKeys {
    riskProfileSendOtpMsg : SendOtpResponse;
    riskProfileTncList: GetTandCList[];
    riskProfileAcknowledgment: GetApproveCustTrx;
    riskProfileDecline:GetDeclineCustTrx;
    fundDocument: FundDocument[];
    approveSubscribeApproved: ApproveSubscribeResponse;
}
