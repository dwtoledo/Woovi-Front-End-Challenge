import { Payment } from "../models/Payments"
import { brazilBRL } from "../models/Currency"
import { Checkbox } from "./ui/checkbox"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { Badge } from "./ui/badge"

interface UniquePaymentCardProps {
  payment: Payment
  title?: string
  isChecked: boolean
  onSelect: (status: boolean, paymentId: string) => void

}

export function UniquePaymentCard({ payment, title, isChecked, onSelect }: UniquePaymentCardProps) {

  function handleOptionCheck(status: boolean) {
    onSelect(status, payment.id)
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

  return (
    <Card
      className="max-w-md relative shadow-none border-2"
      style={{
        borderColor: isChecked ? "hsl(var(--primary))" : "",
        backgroundColor: isChecked ? "hsla(var(--primary), 0.05)" : "",
      }}
    >
      {title ? getTitleBadge() : null}
      <CardHeader className="pb-3">
        <CardTitle className="flex justify-between">
          <span>
            <strong>1x </strong>
            {brazilBRL.format(payment.total)}
          </span>
          <Checkbox
            onCheckedChange={handleOptionCheck}
            checked={isChecked}
            
          />
        </CardTitle>
        <CardDescription>
          <span className="text-primary">
            Ganhe {(payment.cashback * 100).toFixed(2)}% de Cashback
          </span>
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <p className="relative bg-button text-white flex-1 pl-3 pr-8 py-1 rounded-l-md xs:rounded-md xs:pr-4">
          <strong>🤑 {brazilBRL.format(payment.pixReturn)}</strong> de volta no
          seu Pix na hora
          <span
            className="absolute inset-0 right-0 top-0 border-t-[1rem] border-t-transparent border-r-[1rem] border-r-background border-b-[1rem] border-b-transparent xs:hidden"
            style={{
              borderRightColor: isChecked
                ? "hsla(var(--background))"
                : "",
            }}
          ></span>
          {isChecked && (<span
            className="absolute inset-0 right-0 top-0 border-t-[1rem] border-t-transparent border-r-[1rem] border-r-background border-b-[1rem] border-b-transparent xs:hidden"
            style={{borderRightColor: "hsla(var(--primary), 0.05)"}}
          ></span>)}
        </p>
      </CardFooter>
    </Card>
  )
}
