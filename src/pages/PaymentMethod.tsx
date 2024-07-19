import { useEffect, useState } from "react"
import { getPaymentDetails, Installment } from "../models/Payments"
import { paymentDetailsRequest } from "../models/MockedData"
import { usePaymentDetails } from "../layouts/DefaultLayout"
import { InstallmentPaymentCard } from "../components/InstallmentPaymentCard"
import { UniquePaymentCard } from "../components/UniquePaymentCard"
import { Button } from "../components/ui/button"
import { CircleDollarSign } from "lucide-react"
import { Link } from "react-router-dom"

export function PaymentMethod() {
  const { paymentDetails, setPaymentDetails } = usePaymentDetails()
  const [selectedPaymentId, setSelectedPaymentId] = useState<string | null>(
    null
  )

  useEffect(() => {
    handleGetPaymentDetails()
  }, [])

  async function handleGetPaymentDetails() {
    setPaymentDetails(await getPaymentDetails(paymentDetailsRequest))
  }

  function handleUniquePaymentSelection(status: boolean, paymentId: string) {
    if (!status) {
      setSelectedPaymentId(null)
    } else {
      setSelectedPaymentId(paymentId)
    }
  }

  function handleInstallmentPaymentSelection(
    status: boolean,
    installmentId: string
  ) {
    if (!status) {
      setSelectedPaymentId(null)
    } else {
      setSelectedPaymentId(installmentId)
    }
  }

  function isFirstInstallment(installment: Installment) {
    return installment.installment === 2
  }

  function isLastInstallment(installment: Installment) {
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
          title={isFirstInstallment(installment) ? "Pix Parcelado" : ""}
          isFirstInstallment={isFirstInstallment(installment)}
          isLastInstallment={isLastInstallment(installment)}
          onSelect={handleInstallmentPaymentSelection}
          isChecked={selectedPaymentId === installment.id}
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
          <UniquePaymentCard
            payment={paymentDetails.payment}
            title="Pix"
            onSelect={handleUniquePaymentSelection}
            isChecked={selectedPaymentId === paymentDetails.payment.id}
          />
        )}
        <div>{paymentDetails && getInstallmentPaymentCards()}</div>

        <Button asChild={!!selectedPaymentId} disabled={!selectedPaymentId} className="hover:bg-button">
          <Link
            to={`/process/${selectedPaymentId}`}
            className="flex gap-2 items-center justify-center"
          >
            <CircleDollarSign />
            <span className="text-lg">Pagar</span>
          </Link>
        </Button>
      </div>
    </main>
  )
}
