import { MockInitialState, MockSendOtpResponse, MockDeclineResponse, MockOtpValidationResponse, MockGetFundDocumentsSuccess} from "../mock/approval.mock";
import { ApprovalReducer } from "./approval.reducer";
import * as RiskProfileAction from '../+state/approval.action';
import { MockApproveSubscribeResponse } from "../../../app/risk-profile/mock/risk-profile-questionire.mock";

describe('GetApprovalSendOtp Success action', () => {
    it('should get approval send otpSuccess load data from API', () => {
      const action = RiskProfileAction.GetApprovalSendOtpSuccess({
        data: MockSendOtpResponse
      });
      const result = ApprovalReducer(MockInitialState, action);

      expect(result).toBeTruthy();
    });

    it('should get approval otp validation load data from API', () => {
      const action = RiskProfileAction.RiskProfileOtpValidationSuccess({
        data: MockOtpValidationResponse
      });
      const result = ApprovalReducer(MockInitialState, action);

      expect(result).toBeTruthy();
    });

    it('should get approval decline load data from API', () => {
      const action = RiskProfileAction.RiskProfileDeclineSuccess({
        data: MockDeclineResponse
      });
      const result = ApprovalReducer(MockInitialState, action);

      expect(result).toBeTruthy();
    });

    it('should get approval subscription load data from API', () => {
      const action = RiskProfileAction.ApproveSubscribeSuccess({
        data: MockApproveSubscribeResponse
      });
      const result = ApprovalReducer(MockInitialState, action);

      expect(result).toBeTruthy();
    });

    it('should get fund documents successfully', () => {
      const action = RiskProfileAction.GetFundDocumentsSuccess({
        data: MockGetFundDocumentsSuccess
      });
      const result = ApprovalReducer(MockInitialState, action);
  
      expect(result).toBeTruthy();
    });

  });

