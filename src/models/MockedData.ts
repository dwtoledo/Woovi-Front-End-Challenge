export const paymentDetailsRequest = {
  "userId": "7670e3c0-438a-4053-a174-7ccb5d7e00a7",
  "totalPayment": 30500.00
}

export const paymentDetailsResponse = {
  "user": {
    "id": "7670e3c0-438a-4053-a174-7ccb5d7e00a7",
    "firstName": "João"
  },
  "payment": {
    "id": "a4ad6270-32b3-4494-9ed0-2ec42eaeabc0",
    "total": 30500.00,
    "cashback": 0.03,
    "pixReturn": 300.00,
    "installments": [
      {
        "id": "746ff52c-1757-4c0b-ba0b-820fdf1642c0",
        "installment": 2,
        "value": 15300.00,
        "total": 30600.00,
        "isBestOption": false,
        "totalEffectiveCost": 0.005
      },
      {
        "id": "b5605a59-beea-4a0c-aad0-992f7f0d3845",
        "installment": 3,
        "value": 10196.66,
        "total": 30620.00,
        "isBestOption": false,
        "totalEffectiveCost": 0.005
      },
      {
        "id": "6cba3664-dd59-453e-91a6-4427703a2901",
        "installment": 4,
        "value": 7725.00,
        "total": 30900.00,
        "isBestOption": true,
        "interestDifference": 0.03,
        "totalEffectiveCost": 0.005
      },
      {
        "id": "372eb183-c104-4aa1-afe2-2cf2e5e34eb7",
        "installment": 5,
        "value": 6300.00,
        "total": 31500.00,
        "isBestOption": false,
        "totalEffectiveCost": 0.005
      },
      {
        "id": "f96b00ac-adc5-4889-b2e4-511d1a324379",
        "installment": 6,
        "value": 5283.33,
        "total": 31699.98,
        "isBestOption": false,
        "totalEffectiveCost": 0.005
      },
      {
        "id": "71628b9e-4e08-4a6d-afd8-77616e16adad",
        "installment": 7,
        "value": 4542.85,
        "total": 31800.00,
        "isBestOption": false,
        "totalEffectiveCost": 0.005
      }
    ]
  }
}

export const transactionDetailsResponse = {
  "userId": "7670e3c0-438a-4053-a174-7ccb5d7e00a7",
  "paymentId": "a4ad6270-32b3-4494-9ed0-2ec42eaeabc0",
  "transactionId": "2c1b951f356c4680b13ba1c9fc889c47",
  "qrCode": "PIX QR CODE",
  "qrCodeImage": "https://raw.githubusercontent.com/dwtoledo/Woovi-Front-End-Challenge/main/src/assets/images/qr-code.svg",
  "deadline": "2021-12-15T11:17:00Z"
}