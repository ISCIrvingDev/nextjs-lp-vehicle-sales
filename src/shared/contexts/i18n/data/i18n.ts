// * Data
import { i18nAbout } from "./about";
import { i18nAuth } from "./auth";
import { i18nBuy } from "./buy";
import { i18nCommon } from "./common";
import { i18nCustomers } from "./customers";
import { i18nDashboard } from "./dashboard";
import { i18nEarningsReports } from "./earnings-reports";
import { i18nFaqs } from "./faqs";
import { i18nFooter } from "./footer";
import { i18nInventory } from "./inventory";
import { i18nLandingPage } from "./landing-page";
import { i18nLayaways } from "./layaways";
import { i18nNavigation } from "./navigation";
import { i18nPrivacy } from "./privacy";
import { i18nPurchase } from "./purchase";
import { i18nRoles } from "./roles";
import { i18nSales } from "./sales";
import { i18nStaticPages } from "./static-pages";
import { i18nSuppliers } from "./suppliers";
import { i18nTerms } from "./terms";
import { i18nUser } from "./user";
import { i18nVehicles } from "./vehicles";

export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const translations = {
  en: {
    // Landing Page -> Agregado el 2026-01-09
    ...i18nLandingPage.en,

    // About -> Agregado el 2026-01-09
    ...i18nAbout.en,

    // FAQs -> Agregado el 2026-01-09
    ...i18nFaqs.en,

    // Privacy Policy -> Agregado el 2026-01-10
    ...i18nPrivacy.en,

    // Terms -> Agregado el 2026-01-16
    ...i18nTerms.en,

    // Purchase -> Agregado el 2026-02-11
    ...i18nPurchase.en,

    // Buy DMS -> Agregado el 2026-02-11
    ...i18nBuy.en,

    // Navigation
    ...i18nNavigation.en,

    // Auth
    ...i18nAuth.en,

    // Dashboard
    ...i18nDashboard.en,

    // Vehicles
    ...i18nVehicles.en,

    // Layaways -> Agregado el 2026-01-24
    ...i18nLayaways.en,

    // Inventory -> Agregado el 2026-01-14
    ...i18nInventory.en,

    // Customers
    ...i18nCustomers.en,

    // Sales
    ...i18nSales.en,

    // Earnings Reports -> Agregado el 2026-01-14
    ...i18nEarningsReports.en,

    // Common
    ...i18nCommon.en,

    // Footer
    ...i18nFooter.en,

    // Static Pages
    ...i18nStaticPages.en,

    // Suppliers -> Agregado el 2025-12-06
    ...i18nSuppliers.en,

    // Users -> Agregado el 2026-01-07
    ...i18nUser.en,

    // Roles -> Agregado el 2025-12-26
    ...i18nRoles.en,
  },
  es: {
    // Landing Page -> Agregado el 2026-01-09
    ...i18nLandingPage.es,

    // About -> Agregado el 2026-01-09
    ...i18nAbout.es,

    // FAQs -> Agregado el 2026-01-09
    ...i18nFaqs.es,

    // Privacy Policy -> Agregado el 2026-01-10
    ...i18nPrivacy.es,

    // Terms -> Agregado el 2026-01-16
    ...i18nTerms.es,

    // Purchase -> Agregado el 2026-02-11
    ...i18nPurchase.es,

    // Buy DMS -> Agregado el 2026-02-11
    ...i18nBuy.es,

    // Navigation
    ...i18nNavigation.es,

    // Auth
    ...i18nAuth.es,

    // Dashboard
    ...i18nDashboard.es,

    // Vehicles
    ...i18nVehicles.es,

    // Layaways -> Agregado el 2026-01-24
    ...i18nLayaways.es,

    // Inventory -> Agregado el 2026-01-14
    ...i18nInventory.es,

    // Customers
    ...i18nCustomers.es,

    // Sales
    ...i18nSales.es,

    // Earnings Reports -> Agregado el 2026-01-14
    ...i18nEarningsReports.es,

    // Common
    ...i18nCommon.es,

    // Footer
    ...i18nFooter.es,

    // Static Pages
    ...i18nStaticPages.es,

    // Suppliers -> Agregado el 2025-12-06
    ...i18nSuppliers.es,

    // Users -> Agregado el 2026-01-07
    ...i18nUser.es,

    // Roles -> Agregado el 2025-12-26
    ...i18nRoles.es,
  },
} as const;

export type TranslationKey = keyof typeof translations.en;
