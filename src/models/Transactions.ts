import { transactionDetailsResponse } from "./MockedData"

export interface TransactionRequest {
  userId: string,
  paymentId: string,
  hasInstallments: boolean,
  installmentId?: string,
}

export interface TransactionDetails {
  userId: string,
  paymentId: string,
  transactionId: string,
  qrCode: string,
  qrCodeImage: string,
  deadline: string
}

export async function getTransactionDetails(
  request: TransactionRequest
): Promise<TransactionDetails> {
  try {
    //const url = import.meta.env.BACKEND_URL + '/transaction/details'
    //const response: AxiosResponse<TransactionDetails> = await axios.post(url, request)
    //return response.data
    return transactionDetailsResponse
  } catch (error) {
    alert(`Erro ao solicitar os detalhes da transação: ${error}`)
    throw error
  }
}