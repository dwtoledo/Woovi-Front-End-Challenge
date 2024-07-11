import axios, { AxiosResponse } from 'axios'
import { User } from "./Users";
import { paymentDetailsResponse } from './MockedData';

interface Installment {
  id: string;
  installment: number;
  value: number;
  total: number;
  isBestOption: boolean;
  totalEffectiveCost: number;
}

interface Payment {
  id: string;
  total: number;
  cashback: number;
  pixReturn: number;
  installments: Array<Installment>;
}

interface PaymentRequest {
  userId: string;
  totalPayment: number;
}

export interface PaymentDetails {
  user: User;
  payment: Payment;
}

export async function getPaymentDetails(
  request: PaymentRequest
): Promise<PaymentDetails> {
  try {
    //const url = import.meta.env.BACKEND_URL + '/payments/details'
    //const response: AxiosResponse<PaymentDetails> = await axios.post(url, request)
    //return response.data
    return paymentDetailsResponse
  } catch (error) {
    alert(`Erro ao solicitar os detalhes do pagamento: ${error}`);
    throw error;
  }
}
