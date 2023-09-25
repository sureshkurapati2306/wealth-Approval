export const MockGetTandCList = [
    {
        "tncId": 1,
        "tncName": "test-name1",
        "tncOrder": 1,
        "tncType": "U",
        "tncUrl": "test-url1"
    },
    {
        "tncId": 2,
        "tncName": "test-name",
        "tncOrder": 2,
        "tncType": "C",
        "tncUrl": ""
    }
];
export const MockInitialState = {};

export const MockGetTandCContent = [
    {
      tncContent : '<h2>header</h2>'
    }
];

export const MockSendOtpResponse =
{
    message : "OTP Sent Successfully"
};

export const MockOtpValidationResponse = {
    "status": "200",
    "message": "Success",
    "trxRefId" : "1234",
    "custEmail" : "abc@gmail.com",
    "trxStatus": "C",
    "trxUpdateDate": "2022-09-06 10:10:10"
};

export const MockOtpValidationPayload = {
    "approvalCode": "A01",
    "transactionId" : "1234",
    "otp" : "1111"
};

export const MockDeclineResponse = {
    "trxStatus": "C",
    "trxUpdateDate": "2022-09-06 10:10:10"
}

export const MockDeclinePayload = {
    "approvalCode": "A01",
    "transactionId" : "1234",
    "remarks" : "remarks"
};

export const MockGetFundDocumentsReq = {
    "fundCode": 'CBT45A'
}

export const MockGetFundDocumentsSuccess = [
		{
			"msId": 10724,
			"msLink": "F000000AP0",
			"msUrl": " ",
			"isActive": "Y",
			"docId": 1,
			"documentName": "Master Prospectus"
		},
		{
			"msId": 10725,
			"msLink": "F000000AP0",
			"msUrl": " ",
			"isActive": "Y",
			"docId": 77,
			"documentName": "Product Highlight Sheet"
		},
		{
			"msId": 10726,
			"msLink": "F000000AP0",
			"msUrl": " ",
			"isActive": "Y",
			"docId": 4,
			"documentName": "Annual Report"
		},
		{
			"msId": 10727,
			"msLink": "F000000AP0",
			"msUrl": " ",
			"isActive": "Y",
			"docId": 5,
			"documentName": "Semi-Annual Report"
		},
		{
			"msId": 10728,
			"msLink": "F000000AP0",
			"msUrl": " ",
			"isActive": "Y",
			"docId": 52,
			"documentName": "Fact sheet"
		}
	]

export const InitialState = {
	riskProfileSendOtpMsg : null,
	riskProfileTncList: null,
	riskProfileAcknowledgment: null,
	riskProfileDecline: null,
	fundDocument: null,
	approveSubscribeApproved: null,
}