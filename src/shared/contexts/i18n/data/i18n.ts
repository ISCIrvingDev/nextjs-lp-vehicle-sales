// * Data
import { i18nAbout } from "./about";
import { i18nBuy } from "./buy";
import { i18nCommon } from "./common";
import { i18nFaqs } from "./faqs";
import { i18nFooter } from "./footer";
import { i18nHome } from "./home";
import { i18nLandingPage } from "./landing-page";
import { i18nPrivacy } from "./privacy";
import { i18nPurchase } from "./purchase";
import { i18nSchedule } from "./schedule";
import { i18nTerms } from "./terms";

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

    // Schedule -> Agregado el 2026-02-18
    ...i18nSchedule.en,

    // Schedule -> Agregado el 2026-02-18
    ...i18nHome.en,

    // Common
    ...i18nCommon.en,

    // Footer
    ...i18nFooter.en,
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

    // Schedule -> Agregado el 2026-02-18
    ...i18nSchedule.es,

    // Schedule -> Agregado el 2026-02-18
    ...i18nHome.es,

    // Common
    ...i18nCommon.es,

    // Footer
    ...i18nFooter.es,
  },
} as const;

export type TranslationKey = keyof typeof translations.en;
