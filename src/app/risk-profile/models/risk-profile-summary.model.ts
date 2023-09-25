export interface IRPQuestionarie {
  questionNumber: number;
  questionDesc: string;
  optionsDesc: string;
  additional: string;
}

export interface ApproveSubscribeRequest {
  approvalCode: string;
}

export interface ApproveSubscribeResponse {
  settlementAccount: string;
  settlementRelationType: null;
  productType: string;
  transactionType: string;
  riskName: string;
  riskDesc: string;
  customerName: string;
  totalInvestmentAmount: number;
  totalSalesCharge: number;
  totalIndicativeAmount: number;
  subscriberDtoList: [
    {
      salesCharge: number;
      salesChargeAmount: number;
      investmentAmount: number;
      navPrice: number;
      navUpdatedDate: string;
      fundName: string;
      colorCode: string;
      fundStatus: string;
      assetClass: string;
      fundId: number;
      currencyCode: string;
      riskRating: string;
      fundIndicator: string;
      riskDeviation: boolean;
    }
  ];
}
