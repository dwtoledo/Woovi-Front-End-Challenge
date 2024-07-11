import { useEffect, useState } from "react"
import { getPaymentDetails } from "../models/Payments"
import { paymentDetailsRequest } from "../models/MockedData"
import { usePaymentDetails } from "../layouts/DefaultLayout"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

export function PaymentMethod() {
  const { paymentDetails, setPaymentDetails } = usePaymentDetails()
  const [optionChecked, setOptionChecked] = useState<boolean>(false)

  useEffect(() => {
    handleGetPaymentDetails()
  }, [])

  async function handleGetPaymentDetails() {
    setPaymentDetails(await getPaymentDetails(paymentDetailsRequest))
  }

  function handleOptionCheck(event: boolean) {
    setOptionChecked(event)
  }

  return (
    <main className="flex flex-col px-4 items-center">
      <p className="text-center font-extrabold text-2xl mb-8">
        {paymentDetails?.user.firstName}, como você quer pagar?
      </p>
      <Card className="max-w-md relative">
        <Badge
          className="absolute left-6 top-0 transform -translate-y-1/2 text-lg"
          variant="secondary"
        >
          Pix
        </Badge>
        <CardHeader className="pb-3">
          <CardTitle className="flex justify-between">
            <span><strong>1x</strong> R$ 30.500,00</span>
            <Checkbox onCheckedChange={handleOptionCheck} checked={optionChecked}/>
          </CardTitle>
          <CardDescription className="text-primary">
            Ganhe 3% de Cashback
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <p
            className="
            relative bg-button text-white flex-1 pl-3 pr-8 py-1 rounded-l-md xs:rounded-md xs:pr-4"
          >
            <strong>🤑 R$ 300,00</strong> de volta no seu Pix na hora
            <span
              className="
            absolute inset-0 right-0 top-0
            border-t-[1rem] border-t-transparent
            border-r-[1rem] border-r-background
            border-b-[1rem] border-b-transparent
            xs:hidden"
            ></span>
          </p>
        </CardFooter>
      </Card>
    </main>
  )
}
