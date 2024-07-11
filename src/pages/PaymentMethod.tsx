import { useEffect } from "react"
import { getPaymentDetails } from "../models/Payments"
import { paymentDetailsRequest } from "../models/MockedData"
import { usePaymentDetails } from "../layouts/DefaultLayout"
import { PaymentOptionCard } from "../components/PaymentOptionCard"

export function PaymentMethod() {
  const { paymentDetails, setPaymentDetails } = usePaymentDetails()
  
  useEffect(() => {
    handleGetPaymentDetails()
  }, [])

  async function handleGetPaymentDetails() {
    setPaymentDetails(await getPaymentDetails(paymentDetailsRequest))
  }

  return (
    <main className="flex flex-col px-4 items-center">
      <p className="text-center font-extrabold text-2xl mb-8">
        {paymentDetails?.user.firstName}, como você quer pagar?
      </p>
      {paymentDetails && <PaymentOptionCard payment={paymentDetails.payment} title="Pix" hasInstallments={false}/>}
    </main>
  )
}
