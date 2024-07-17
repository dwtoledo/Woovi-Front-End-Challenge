import { useParams } from "react-router-dom"
import { usePaymentDetails } from "../layouts/DefaultLayout"
import { brazilBRL } from "../models/Currency"

export function PixCreditCardMethod() {
  const { paymentId } = useParams()
  const { paymentDetails } = usePaymentDetails()

  const isUniquePayment = paymentDetails?.payment.id === paymentId

  const installmentDetails = isUniquePayment
    ? undefined
    : paymentDetails?.payment.installments.find(
        (installment) => installment.id === paymentId
      )
  
  function getPaymentMessage() {
    return (
      <p className="text-center font-extrabold text-2xl mb-8">
        {paymentDetails?.user.firstName}, pague{" "}
        {isUniquePayment && paymentDetails
          ? `${brazilBRL.format(paymentDetails.payment.total)} `
          : !!installmentDetails ? `a entrada de ${brazilBRL.format(installmentDetails.value)} ` : ''}
          pelo Pix.
      </p>
    )
  }

  return (
    <main className="flex flex-col px-4 items-center">
      {getPaymentMessage()}
    </main>
  )
}
