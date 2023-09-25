
import { MockApproveSubscribeResponse } from '../../../app/risk-profile/mock/risk-profile-questionire.mock';
import { MockSendOtpResponse, MockDeclineResponse, MockOtpValidationResponse, MockGetFundDocumentsSuccess, InitialState } from '../mock/approval.mock';
import * as ApprovalSelector from './approval.selector';

describe('approval Selectors', () => {

    it('should get Send Otp Msg ', () => {
        const result = ApprovalSelector.riskProfileSendOtpMsg.projector({...InitialState,riskProfileSendOtpMsg:MockSendOtpResponse});

        expect(result).toBeTruthy();
    });

    it('should get Send Otp Msg null', () => {
        const result = ApprovalSelector.riskProfileSendOtpMsg.projector(MockSendOtpResponse);

        expect(result).toBeNull();
    });

    it('should get otp validation success ', () => {
        const result = ApprovalSelector.riskProfileOtpValidation.projector({...InitialState,riskProfileAcknowledgment:MockOtpValidationResponse});

        expect(result).toBeTruthy();
    });

    it('should get otp validation null ', () => {
        const result = ApprovalSelector.riskProfileOtpValidation.projector(MockOtpValidationResponse);

        expect(result).toBeNull();
    });

    it('should get decline success ', () => {
        const result = ApprovalSelector.riskProfileDecline.projector({...InitialState,riskProfileDecline:MockDeclineResponse});

        expect(result).toBeTruthy();
    });

    it('should get decline success null ', () => {
        const result = ApprovalSelector.riskProfileDecline.projector(MockDeclineResponse);

        expect(result).toBeNull();
    });

    it('should get success fund documents', () => {
        const result = ApprovalSelector.getFundDocumentsSuccess.projector({...InitialState,fundDocument:MockGetFundDocumentsSuccess});

        expect(result).toBeTruthy();
    });

    it('should get success fund documents null', () => {
        const result = ApprovalSelector.getFundDocumentsSuccess.projector(MockGetFundDocumentsSuccess);

        expect(result).toBeNull();
    });

    it('should get subscribe success ', () => {
        const result = ApprovalSelector.approveSubscribed.projector({...InitialState,approveSubscribeApproved:MockApproveSubscribeResponse});
  
        expect(result).toBeTruthy();
      });

    it('should get subscribe success null', () => {
      const result = ApprovalSelector.approveSubscribed.projector(MockApproveSubscribeResponse);

      expect(result).toBeNull();
    });
});
