export interface DmsProduct {
  name: string;
  priceUSD: number;
  priceMXN: number;
  description: string;
  features: string[];
}

export interface ExchangeRateResponse {
  rates: {
    MXN: number;
  };
}
