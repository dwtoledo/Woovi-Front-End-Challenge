import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { formatInTimeZone } from "date-fns-tz"

import { usePaymentDetails } from "../layouts/DefaultLayout"
import { brazilBRL } from "../models/Currency"

import { Button } from "../components/ui/button"
import { useToast } from "../components/ui/use-toast"
import {
  getTransactionDetails,
  TransactionDetails,
  TransactionRequest,
} from "../models/Transactions"

import QRCodeBttnIcon from "../assets/icons/doc-icon.svg"

export function PaymentProcess() {
  const { toast } = useToast()
  const { paymentId } = useParams()
  const { paymentDetails } = usePaymentDetails()
  const [transactionDetails, setTransactionDetails] =
    useState<TransactionDetails | null>(null)

  const isUniquePayment = paymentDetails?.payment.id === paymentId

  const installmentDetails = isUniquePayment
    ? undefined
    : paymentDetails?.payment.installments.find(
        (installment) => installment.id === paymentId
      )

  useEffect(() => {
    handleGetTransactionDetails()
  }, [])

  async function handleGetTransactionDetails() {
    if (paymentDetails && paymentId) {
      const request: TransactionRequest = {
        userId: paymentDetails?.user.id,
        paymentId,
        hasInstallments: isUniquePayment ? false : true,
        installmentId: installmentDetails?.id,
      }
      setTransactionDetails(await getTransactionDetails(request))
    }
  }

  function getPaymentMessage() {
    return (
      <p className="text-center font-extrabold text-2xl mb-8">
        {paymentDetails?.user.firstName}, pague{" "}
        {isUniquePayment && paymentDetails
          ? `${brazilBRL.format(paymentDetails.payment.total)} `
          : !!installmentDetails
          ? `a entrada de ${brazilBRL.format(installmentDetails.value)} `
          : ""}
        pelo Pix.
      </p>
    )
  }

  async function copyQRCodeToClipboard() {
    try {
      if (transactionDetails) {
        await navigator.clipboard.writeText(transactionDetails.qrCode)
        toast({
          title: "Sucesso!",
          description: "QR Code copiado para a área de transferência!",
        })
      }
    } catch {
      toast({
        title: "Erro!",
        description: "Erro ao copiar o QR Code para a área de transferência!",
        variant: "destructive",
      })
    }
  }

  return (
    <main className="flex flex-col px-4 items-center justify-center">
      {getPaymentMessage()}

      {transactionDetails && (
        <>
          <img
            src={transactionDetails.qrCodeImage}
            alt="QR Code for payment"
            className="max-h-[332px] aspect-square p-2 border-2 border-primary rounded-lg"
          />
          <Button
            onClick={copyQRCodeToClipboard}
            className="flex justify-center items-center gap-2 mt-5 bg-button text-lg hover:bg-button hover:opacity-90"
          >
            <span>Clique para copiar QR CODE</span>
            <img src={QRCodeBttnIcon} alt="Icone de copiar" className="h-4" />
          </Button>

          <div className="mt-5">
            <p className="text-muted-foreground">Prazo de pagamento:</p>
            <p className="font-extrabold">
              {formatInTimeZone(
                transactionDetails.deadline,
                "America/Sao_Paulo",
                "dd/MM/yyyy - HH:mm"
              )}
            </p>
          </div>
        </>
      )}
    </main>
  )
}
