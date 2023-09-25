export interface ApproveCustTrx{
    approvalCode: string,
    transactionId : string,
    otp : string
}

export interface GetApproveCustTrx{
    status:string,
    message:string,
    trxRefId : string,
    custEmail : string,
    trxStatus: string,
    trxUpdateDate: string
}

export interface DeclineCustTrx{
    approvalCode: string,
    transactionId : string,
    remarks : string
}

export interface GetDeclineCustTrx{
    trxStatus: string,
    trxUpdateDate: string
}