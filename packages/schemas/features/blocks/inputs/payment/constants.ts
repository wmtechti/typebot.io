import { PaymentInputBlock } from './schema'

export enum PaymentProvider {
  STRIPE = 'Stripe',
}

export const defaultPaymentInputOptions = {
  provider: PaymentProvider.STRIPE,
  labels: { button: 'Pay', success: 'Success' },
  retryMessageContent: 'Payment failed. Please, try again.',
  currency: 'brl',
} as const satisfies PaymentInputBlock['options']
