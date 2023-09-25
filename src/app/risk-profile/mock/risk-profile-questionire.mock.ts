import { RPQuestionaireResponse, RPQuestionnaireRequest } from "../models/risk-inquiry-detail.model";
import { ApproveSubscribeRequest, ApproveSubscribeResponse } from "../models/risk-profile-summary.model";

export const MockRPQuestionaireResponse: RPQuestionaireResponse = {
  RPQuestionaire: [
    {
      "question_no": 1,
      "question_desc": "My investment experience or understanding covers: Fixed Income, Sukuk, Equities, Collective Investment Scheme",
      "additional": "P",
      "previous_answer_selected": [
        1
      ],
      "answer_options": [
        {
          "answer_no": 1,
          "answer_desc": "Fixed Income, Sukuk, Equities and / or Collective Investment Schemes"
        },
        {
          "answer_no": 2,
          "answer_desc": "Futures and"
        }
      ]
    },
    {
      "question_no": 2,
      "question_desc": "My investment experience or understanding covers: Structured Products, Capital Protected Investment",
      "additional": "P",
      "previous_answer_selected": [
        1
      ],
      "answer_options": [
        {
          "answer_no": 1,
          "answer_desc": "Structured Products, Capital Protected Investment"
        },
        {
          "answer_no": 2,
          "answer_desc": "Futures and/ or Options"
        }
      ]
    },
    {
      "question_no": 3,
      "question_desc": "My investment experience or understanding covers: Futures, Options",
      "additional": "P",
      "previous_answer_selected": [
        2
      ],
      "answer_options": [
        {
          "answer_no": 1,
          "answer_desc": "Structured Products, Capital Protected Investment"
        },
        {
          "answer_no": 2,
          "answer_desc": "Futures and/ or Options"
        }
      ]
    },
    {
      "question_no": 4,
      "question_desc": " When I invest. I prefer",
      "additional": "P",
      "previous_answer_selected": [
        3
      ],
      "answer_options": [
        {
          "answer_no": 1,
          "answer_desc": "Portfolio A: investments with low and steady return and little to no chance of losing my money."
        },
        {
          "answer_no": 2,
          "answer_desc": "Portfolio B: investments with low returns as I am only comfortable with low unpredictability with little chance of losing my money."
        },
        {
          "answer_no": 3,
          "answer_desc": "Portfolio C: investments with moderate returns as I am comfortable with moderate unpredictability and willing to accept losing some money."
        },
        {
          "answer_no": 4,
          "answer_desc": "Portfolio D: investments with high returns as I am comfortable with highly unpredictability and willing to accept losing a moderate amount of money."
        },
        {
          "answer_no": 5,
          "answer_desc": "Portfolio E: investments with very high returns as I am comfortable with very high unpredictability and willing to accept losing a substantial amount of money."
        }
      ]
    },
    {
      "question_no": 5,
      "question_desc": " I will be ____ years old on my coming birthday",
      "additional": "P",
      "previous_answer_selected": [
        3
      ],
      "answer_options": [
        {
          "answer_no": 1,
          "answer_desc": "18 to 35"
        },
        {
          "answer_no": 2,
          "answer_desc": "36 to 45"
        },
        {
          "answer_no": 3,
          "answer_desc": "46 to 60"
        },
        {
          "answer_no": 4,
          "answer_desc": "61 to 74"
        },
        {
          "answer_no": 5,
          "answer_desc": "75 and above"
        }
      ]
    },
    {
      "question_no": 6,
      "question_desc": "I plan to stay invested for",
      "additional": "P",
      "previous_answer_selected": [
        5
      ],
      "answer_options": [
        {
          "answer_no": 1,
          "answer_desc": "Less than 1 year"
        },
        {
          "answer_no": 2,
          "answer_desc": "1 and 3 years"
        },
        {
          "answer_no": 3,
          "answer_desc": "3 and 5 years"
        },
        {
          "answer_no": 4,
          "answer_desc": "5 and 10 years"
        },
        {
          "answer_no": 5,
          "answer_desc": "More than 10 years"
        }
      ]
    },
    {
      "question_no": 7,
      "question_desc": " My monthly net income is",
      "additional": "P",
      "previous_answer_selected": [
        4
      ],
      "answer_options": [
        {
          "answer_no": 1,
          "answer_desc": "RM 4,000 and below"
        },
        {
          "answer_no": 2,
          "answer_desc": "RM4,001 to RM7,000"
        },
        {
          "answer_no": 3,
          "answer_desc": "RM7,001 to RM11,000"
        },
        {
          "answer_no": 4,
          "answer_desc": "RM11,001 to RM15,000"
        },
        {
          "answer_no": 5,
          "answer_desc": "RM15,001 and above"
        }
      ]
    },
    {
      "question_no": 8,
      "question_desc": "Out of my monthly net income, I have a total monthly commitment of",
      "additional": "P",
      "previous_answer_selected": [
        4
      ],
      "answer_options": [
        {
          "answer_no": 1,
          "answer_desc": "RM3,000 and below"
        },
        {
          "answer_no": 2,
          "answer_desc": "RM3,001 to RM5,000"
        },
        {
          "answer_no": 3,
          "answer_desc": "RM5,001 to RM7,000"
        },
        {
          "answer_no": 4,
          "answer_desc": "RM7,001 to RM10,000"
        },
        {
          "answer_no": 5,
          "answer_desc": "RM10,001 and above"
        }
      ]
    },
    {
      "question_no": 9,
      "question_desc": "My personal net worth is approximately",
      "additional": "P",
      "previous_answer_selected": [
        2
      ],
      "answer_options": [
        {
          "answer_no": 1,
          "answer_desc": "Negative RM50,000 and below"
        },
        {
          "answer_no": 2,
          "answer_desc": "Negative RM49,999 to negative RM1"
        },
        {
          "answer_no": 3,
          "answer_desc": "RM0 to RM49,999"
        },
        {
          "answer_no": 4,
          "answer_desc": "RM50,000 to RM100,000"
        },
        {
          "answer_no": 5,
          "answer_desc": "RM101,000 and above"
        }
      ]
    },
    {
      "question_no": 10,
      "question_desc": "Currently, my investments are ____ out of my personal net worth.",
      "additional": "P",
      "previous_answer_selected": [
        1
      ],
      "answer_options": [
        {
          "answer_no": 1,
          "answer_desc": "10% and below"
        },
        {
          "answer_no": 2,
          "answer_desc": "11% to 20%"
        },
        {
          "answer_no": 3,
          "answer_desc": "21% to 30%"
        },
        {
          "answer_no": 4,
          "answer_desc": "31% to 40%"
        },
        {
          "answer_no": 5,
          "answer_desc": "41% and above"
        }
      ]
    }
  ]
}

export const MockRPQuestionnaireRequest: RPQuestionnaireRequest = {
  cifNumber: '12345566'
}

export const MockApproveSubscribeRequest: ApproveSubscribeRequest = {
  approvalCode: '530c4bd6-bf69-4798-a9ab-eb7f91cc13f3',
};

export const MockApproveSubscribeResponse: ApproveSubscribeResponse = {
  settlementAccount: '',
  settlementRelationType: null,
  productType: 'UT',
  transactionType: 'S',
  riskName: 'BALANCED',
  riskDesc: 'Willing to tolerate moderate fluctuations in investment value.',
  customerName: 'Hoffman Haney',
  totalInvestmentAmount: 100000.0,
  totalSalesCharge: 5000.0,
  totalIndicativeAmount: 0.65,
  subscriberDtoList: [
    {
      salesCharge: 5.0,
      salesChargeAmount: 5000.0,
      investmentAmount: 100000.0,
      navPrice: 0.65,
      navUpdatedDate: '2022-08-04 00:00:00',
      fundName: 'Affin Hwang Select Bond Fund - RM',
      fundStatus: 'A',
      assetClass: 'Wealth',
      colorCode:'#fffff',
      fundId: 12345,
      currencyCode: 'MYR',
      riskRating: '2',
      fundIndicator: 'SHARIAH COMPLAINT',
      riskDeviation: false,
    },
  ],
};
