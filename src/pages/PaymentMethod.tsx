import { useEffect } from "react"
import { getPaymentDetails } from "../models/Payments"
import { paymentDetailsRequest } from "../models/MockedData"
import { usePaymentDetails } from "../layouts/DefaultLayout"

export function PaymentMethod () {
  const {paymentDetails, setPaymentDetails} = usePaymentDetails()

  useEffect(() => {
    handleGetPaymentDetails()
  }, [])

  async function handleGetPaymentDetails () {
    setPaymentDetails(await getPaymentDetails(paymentDetailsRequest))
  }

  return (
    <main className="flex flex-col">
      <p>{JSON.stringify(paymentDetails)}</p>
    </main>
  )
}