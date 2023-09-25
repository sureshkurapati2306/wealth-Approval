export interface GetTandCList {
    tncId: number,
    tncName: string,
    tncOrder: number,
    tncType: string,
    tncUrl: string
}

export interface GetTncContent {
    tncContent:string,
}

export interface DialogData {
    title: string;
    description: string;
}

export interface SendOtpResponse {
    message: string
}

export interface FundDocument {
    msId: number,
    msLink: string,
    msUrl: string,
    isActive: string,
    docId: number,
    documentName: string,
}
