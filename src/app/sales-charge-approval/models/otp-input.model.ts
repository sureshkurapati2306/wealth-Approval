export interface getOtpResponse{
    message: string
}

export interface confirmOtpResponse {
        message: string | null,
        referenceNumber: string | null
 }
