import { Outlet, useOutletContext } from "react-router-dom"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { useState } from "react"
import { PaymentDetails } from "../models/Payments"
import { Toaster } from "../components/ui/toaster"

type PaymentDetailsContextType = { 
  paymentDetails: PaymentDetails | null
  setPaymentDetails: React.Dispatch<React.SetStateAction<PaymentDetails | null>>
}

export function DefaultLayout() {
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails | null >(null)

  return (
    <>
      <Header />
      <Outlet context={{ paymentDetails, setPaymentDetails } satisfies PaymentDetailsContextType} />
      <Toaster />
      <Footer />
    </>
  )
}

export function usePaymentDetails() {
  return useOutletContext<PaymentDetailsContextType>();
}
