import { Installment } from "../models/Payments"
import { brazilBRL } from "../models/Currency"
import { Badge } from "./ui/badge"
import { Checkbox } from "./ui/checkbox"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"

interface InstallmentPaymentCardProps {
  installment: Installment
  title?: string
  isFirstInstallment: boolean
  isLastInstallment: boolean
  isChecked: boolean
  onSelect: (status: boolean, installmentId: string) => void
}

export function InstallmentPaymentCard({
  installment,
  title,
  isFirstInstallment,
  isLastInstallment,
  isChecked,
  onSelect,
}: InstallmentPaymentCardProps) {

  function handleOptionCheck(status: boolean) {
    onSelect(status, installment.id)
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

  function getFooterMessage() {
    return (
      <CardFooter>
        <p
          className="
        relative bg-button text-white flex-1 pl-3 pr-8 py-1 rounded-l-md xs:rounded-md xs:pr-4"
        >
          <strong>-3% de juros:</strong> Melhor opção de parcelamento
          <span className="absolute inset-0 right-0 top-0 border-t-[1rem] border-t-transparent border-r-[1rem] border-r-background border-b-[1rem] border-b-transparent xs:hidden"
          style={{
            borderRightColor: isChecked
              ? "hsla(var(--background))"
              : "",
          }}></span>
          {isChecked && (<span
            className="absolute inset-0 right-0 top-0 border-t-[1rem] border-t-transparent border-r-[1rem] border-r-background border-b-[1rem] border-b-transparent xs:hidden"
            style={{borderRightColor: "hsla(var(--primary), 0.05)"}}
          ></span>)}
        </p>
      </CardFooter>
    )
  }

  return (
    <Card
      className="max-w-md relative shadow-none border-2"
      style={{
        borderBottomLeftRadius: isFirstInstallment
          ? "0px"
          : isLastInstallment
          ? ""
          : "0px",
        borderBottomRightRadius: isFirstInstallment
          ? "0px"
          : isLastInstallment
          ? ""
          : "0px",
        borderTopLeftRadius: isLastInstallment
          ? "0px"
          : isFirstInstallment
          ? ""
          : "0px",
        borderTopRightRadius: isLastInstallment
          ? "0px"
          : isFirstInstallment
          ? ""
          : "0px",
        borderBottom: !isLastInstallment && !isChecked ? "0px" : "",
        borderColor: isChecked ? "hsl(var(--primary))" : "",
        backgroundColor: isChecked ? "hsla(var(--primary), 0.05)" : "",
      }}
    >
      {title ? getTitleBadge() : null}
      <CardHeader className="pb-3">
        <CardTitle className="flex justify-between">
          <span>
            <strong>{installment.installment}x </strong>
            {brazilBRL.format(installment.value)}
          </span>
          <Checkbox
            onCheckedChange={handleOptionCheck}
            checked={isChecked}
          />
        </CardTitle>
        <CardDescription>
          Total: {brazilBRL.format(installment.total)}
        </CardDescription>
      </CardHeader>
      {installment.isBestOption && getFooterMessage()}
    </Card>
  )
}
