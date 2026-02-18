export interface PurchaseDetails {
  id: string;
  stripeSessionId: string;
  stripePaymentId: string | null;
  amount: number;
  currency: string;
  customerEmail: string | null;
  customerName: string | null;
  status: string;
  receiptUrl: string | null;
  createdAt: string;
}

export interface PaymentDetailsResponse {
  purchase: PurchaseDetails;
}

export interface PaymentDetailsError {
  error: string;
}
