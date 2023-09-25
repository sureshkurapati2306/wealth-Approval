export interface TransactionRefId{
    message: string
    success: boolean
    data : TransactionReferenceId
    
}
export interface TransactionReferenceId{
    approverType : string,
    transactionReferenceId : string,
    statusCode : string
}

export interface ApproveOrReject{
    approvalStatus?:string
    remark?:string
    email:string
}

export interface ApproveOrRejectResponse{
    statusCode : string
}

export interface GetTransactionRefId{
    trxType: string,
    approverType: string,
    statusCode: string,
    transactionReferenceId: string  
}