/**
 * * Presentation Layer: Buy DMS Page
 */

// * Props
// No se reciben props en los custom hooks

// * React
import { useEffect, useState } from "react";

// * NextJS
// xxx

// * Components
import { useToast } from "@/shared/hooks/use-toast";

// * Icons
// xxx

// * Models
import { ExchangeRateResponse } from "../_models/dms-product";

// * Services
import { getStripeJS } from "@/shared/lib/get-stripejs";

// * Custom Hooks
// xxx

// * Contexts
import { useI18n } from "@/shared/contexts/i18n/I18nContext";

// * Guards
// No se requieren guards en esta página pública

export function useBuy() {
  const { t } = useI18n();
  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState(false);
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [isLoadingRate, setIsLoadingRate] = useState(true);

  const PRODUCT_PRICE_USD = 175;

  // Fetch exchange rate USD to MXN
  const fetchExchangeRate = async () => {
    try {
      setIsLoadingRate(true);
      // Using exchangerate-api.com (free tier available)
      const response = await fetch(
        "https://api.exchangerate-api.com/v4/latest/USD",
      );
      const data: ExchangeRateResponse = await response.json();

      if (data.rates && data.rates.MXN) {
        setExchangeRate(data.rates.MXN);
      }
    } catch (error) {
      console.error("Failed to fetch exchange rate:", error);
      // Fallback rate if API fails
      setExchangeRate(17.2);
    } finally {
      setIsLoadingRate(false);
    }
  };

  useEffect(() => {
    fetchExchangeRate();
  }, []);

  const calculatePriceMXN = () => {
    if (!exchangeRate) return null;
    return (PRODUCT_PRICE_USD * exchangeRate).toFixed(2);
  };

  const handlePurchase = async () => {
    try {
      setIsLoading(true);

      const response = await fetch("/api/stripe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // The API returns a redirect, so we need to handle it
        const data = await response.json();

        // const stripe = await getStripeJS();

        // if (stripe) {
        //   await stripe.redirectToCheckout({ sessionId: '...' });
        // }

        if (data && data.url) {
          window.location.href = data.url;
        }
      } else {
        // const errorData = await response.json();
        toast({
          description: "Failed to initiate checkout",
          variant: "error",
          duration: 5000,
        });
      }
    } catch (error) {
      console.error("Purchase error:", error);
      toast({
        description: "An error occurred while processing your purchase",
        variant: "error",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    t,
    isLoading,
    isLoadingRate,
    exchangeRate,
    productPriceUSD: PRODUCT_PRICE_USD,
    productPriceMXN: calculatePriceMXN(),
    handlePurchase,
  };
}
