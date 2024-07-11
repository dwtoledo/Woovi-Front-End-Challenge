import { useEffect } from "react"
import { getPaymentDetails, Installment } from "../models/Payments"
import { paymentDetailsRequest } from "../models/MockedData"
import { usePaymentDetails } from "../layouts/DefaultLayout"
import { InstallmentPaymentCard } from "../components/InstallmentPaymentCard"
import { UniquePaymentCard } from "../components/UniquePaymentCard"

export function PaymentMethod() {
  const { paymentDetails, setPaymentDetails } = usePaymentDetails()

  useEffect(() => {
    handleGetPaymentDetails()
  }, [])

  async function handleGetPaymentDetails() {
    setPaymentDetails(await getPaymentDetails(paymentDetailsRequest))
  }

  function isFirstInstallment (installment: Installment) {
    return installment.installment === 2
  }

  function isLastInstallment (installment: Installment) {
    if (!paymentDetails?.payment?.installments) return false
    const installmentsNumber = paymentDetails.payment.installments.length + 1    
    return installment.installment === installmentsNumber
  }

  function getInstallmentPaymentCards() {
    return paymentDetails?.payment.installments.map((installment) => {
      return (
        <InstallmentPaymentCard
          key={installment.id}
          installment={installment}
          title={ isFirstInstallment(installment) ? "Pix Parcelado" : ""}
          isFirstInstallment={isFirstInstallment(installment)}
          isLastInstallment={isLastInstallment(installment)}
        />
      )
    })
  }

  return (
    <main className="flex flex-col px-4 items-center">
      <p className="text-center font-extrabold text-2xl mb-8">
        {paymentDetails?.user.firstName}, como você quer pagar?
      </p>

      <div className="flex flex-col gap-8">
        {paymentDetails && (
          <UniquePaymentCard payment={paymentDetails.payment} title="Pix" />
        )}
        <div>{paymentDetails && getInstallmentPaymentCards()}</div>
      </div>
    </main>
  )
}
