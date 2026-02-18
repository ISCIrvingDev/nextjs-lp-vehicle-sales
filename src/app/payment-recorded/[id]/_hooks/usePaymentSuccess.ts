/**
 * * Presentation Layer: Payment Success Page
 */

// * Props
// No se reciben props en los custom hooks

// * React
import { useEffect, useState } from "react";

// * NextJS
import { useParams } from "next/navigation";

// * Components
import { useToast } from "@/shared/hooks/use-toast";

// * Icons
// No se requieren iconos en este hook

// * Models
import { PurchaseDetails } from "../_models/purchase";

// * Services
import { getPaymentDetails } from "@/shared/services/payment-recorded";

// * Custom Hooks
// No hay hooks personalizados adicionales

// * Contexts
import { useI18n } from "@/shared/contexts/i18n/I18nContext";

// * Guards
// No se requieren guards en esta página pública

export function usePaymentSuccess() {
  const params = useParams();
  const { t } = useI18n();
  const { toast } = useToast();

  const sessionId = params.id as string;

  const [purchase, setPurchase] = useState<PurchaseDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPaymentDetails = async () => {
    if (!sessionId) {
      setError("Session ID not found");
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      const data = await getPaymentDetails(sessionId);

      if (data.error) {
        setError(data.error);
        toast({
          description: t("errorLoadingPayment"),
          variant: "error",
          duration: 5000,
        });
      } else if (data.purchase) {
        setPurchase(data.purchase);
      }
    } catch (err) {
      console.error("Failed to fetch payment details:", err);
      setError("Failed to fetch payment details");
      toast({
        description: t("errorLoadingPayment"),
        variant: "error",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPaymentDetails();
  }, [sessionId]);

  const formatAmount = (amount: number, currency: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return {
    purchase,
    isLoading,
    error,
    sessionId,
    t,
    fetchPaymentDetails,
    formatAmount,
    formatDate,
  };
}
