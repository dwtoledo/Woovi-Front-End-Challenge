import { useParams } from "react-router-dom"
import { usePaymentDetails } from "../layouts/DefaultLayout"
import { brazilBRL } from "../models/Currency"
import { useEffect, useState } from "react"
import {
  getTransactionDetails,
  TransactionDetails,
  TransactionRequest,
} from "../models/Transactions"

export function PaymentProcess() {
  const { paymentId } = useParams()
  const { paymentDetails } = usePaymentDetails()
  const [transactionDetails, setTransactionDetails] =
    useState<TransactionDetails | null>(null)

  const isUniquePayment = paymentDetails?.payment.id === paymentId

  const installmentDetails = isUniquePayment
    ? undefined
    : paymentDetails?.payment.installments.find(
        (installment) => installment.id === paymentId
      )

  useEffect(() => {
    handleGetTransactionDetails()
  }, [])

  async function handleGetTransactionDetails() {
    if (paymentDetails && paymentId) {
      const request: TransactionRequest = {
        userId: paymentDetails?.user.id,
        paymentId,
        hasInstallments: isUniquePayment ? false : true,
        installmentId: installmentDetails?.id,
      }
      setTransactionDetails(await getTransactionDetails(request))
    }
  }

  function getPaymentMessage() {
    return (
      <p className="text-center font-extrabold text-2xl mb-8">
        {paymentDetails?.user.firstName}, pague{" "}
        {isUniquePayment && paymentDetails
          ? `${brazilBRL.format(paymentDetails.payment.total)} `
          : !!installmentDetails
          ? `a entrada de ${brazilBRL.format(installmentDetails.value)} `
          : ""}
        pelo Pix.
      </p>
    )
  }

  return (
    <main className="flex flex-col px-4 items-center justify-center">
      {getPaymentMessage()}

      {transactionDetails && (
        <img
          src={transactionDetails.qrCodeImage}
          alt="QR Code for payment"
          className="max-h-[332px] aspect-square p-2 border-2 border-primary rounded-lg"
        />
      )}
    </main>
  )
}
