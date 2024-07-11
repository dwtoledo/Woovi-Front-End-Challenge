import { createBrowserRouter } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { PaymentMethod } from './pages/PaymentMethod'
import { PixCreditCardMethod } from './pages/PixCreditCardMethod'
import { PageNotFound } from './pages/PageNotFound'


export const Router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: '/',
        element: <PaymentMethod />,
      },
      {
        path: '/pix-credit-card/:paymentId',
        element: <PixCreditCardMethod />,
      },
    ],
  },
])