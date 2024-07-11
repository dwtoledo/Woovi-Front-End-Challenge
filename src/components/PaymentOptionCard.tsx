import { useState } from "react"

import { Payment } from "../models/Payments"
import { brazilBRL } from "../models/Currency"

import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface PaymentOptionCardProps {
  payment: Payment
  title?: string
  hasInstallments: boolean
}

export function PaymentOptionCard({
  payment,
  title,
  hasInstallments,
}: PaymentOptionCardProps) {
  const [optionChecked, setOptionChecked] = useState<boolean>(false)

  function handleOptionCheck(event: boolean) {
    setOptionChecked(event)
  }

  function getTitleBadge() {
    return (
      <Badge
        className="absolute left-6 top-0 transform -translate-y-1/2 text-lg"
        variant="secondary"
      >
        {title}
      </Badge>
    )
  }

  function getFooterElement() {
    return (
      <CardFooter>
        <p
          className="
        relative bg-button text-white flex-1 pl-3 pr-8 py-1 rounded-l-md xs:rounded-md xs:pr-4"
        >
          <strong>🤑 {brazilBRL.format(payment.pixReturn)}</strong> de volta no
          seu Pix na hora
          <span className="absolute inset-0 right-0 top-0 border-t-[1rem] border-t-transparent border-r-[1rem] border-r-background border-b-[1rem] border-b-transparent xs:hidden"></span>
        </p>
      </CardFooter>
    )
  }

  return (
    <Card className="max-w-md relative">
      {title ? getTitleBadge() : null}
      <CardHeader className="pb-3">
        <CardTitle className="flex justify-between">
          <span>
            <strong>{!hasInstallments ? "1x" : "99x"}</strong>{" "}
            {brazilBRL.format(payment.total)}
          </span>
          <Checkbox
            onCheckedChange={handleOptionCheck}
            checked={optionChecked}
          />
        </CardTitle>
        <CardDescription>
          {!hasInstallments && (
            <span className="text-primary">
              Ganhe {(payment.cashback * 100).toFixed(2)}% de Cashback
            </span>
          )}
          {hasInstallments && <span>Total: R$ 99.999,99</span>}
        </CardDescription>
      </CardHeader>
      {!hasInstallments ? getFooterElement() : null}
    </Card>
  )
}
