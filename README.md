# Landing Page del Dealer System

## Variables de Entorno

```text
# Environment
NODE_ENV="development" # development|production
NEXT_PUBLIC_IS_DEMO="true" # false|true

# Google Analytics & Google Tag Manager
# GOOGLE_ANALYTICS_ID="CODIGO-ID"
GOOGLE_TAG_MANAGER_ID="CODIGO-ID"

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="public_stripe_key"
STRIPE_SECRET_KEY="private_stripe_key"

# Prisma
DMS_BY_IVIN_DEV_DATABASE_URL="postgresql://<user>:<pass>@localhost:<port>/<db-name>"

# API
VEHICLE_SALES_API_URL="http://localhost:3000"
```

## Proceso de post-instalacion

Establecer la BD:

- Generar el esquema: `npm run db:generate`
- Sincronizar el esquema con la BD: `npm run db:push`
  - Revisar la variable de entorno `DMS_BY_IVIN_DEV_DATABASE_URL` para saber a donde estamos apuntando

## Estructura del proyecto

Project Structure:

```text
📁 nextjs-lp-vehicle-sales/
├── 📁 .vscode/
│   ├── launch.json
│   └── settings.json
│
├── 📁 prisma/
│   ├── 📁 db-dms-by-ivin-dev/
│   │   └── schema.prisma
│   └── 📁 generated/client-dms-by-ivin-dev/ (auto-generated)
│
├── 📁 ref/ (documentation & references)
│   ├── 📁 Back Ups/
│   ├── 📁 DB/
│   ├── 📁 Google/
│   ├── 📁 Pendientes/
│   ├── 📁 Prompts/
│   ├── 📁 Stripe/
│   └── 📁 Vertical Slice Architecture/
│
├── 📁 src/
│   ├── 📁 app/ (Next.js App Router)
│   │   ├── 📁 _components/
│   │   │   ├── footer.tsx
│   │   │   └── landing-page-header.tsx
│   │   ├── 📁 _hooks/
│   │   │   └── useHome.ts
│   │   ├── 📁 about/
│   │   │   └── page.tsx
│   │   ├── 📁 api/ (MCS Pattern)
│   │   │   ├── route.ts
│   │   │   ├── 📁 payment-recorded/
│   │   │   │   ├── route.ts
│   │   │   │   └── service.ts
│   │   │   ├── 📁 schedule/
│   │   │   │   ├── route.ts
│   │   │   │   └── service.ts
│   │   │   └── 📁 stripe/
│   │   │       ├── route.ts
│   │   │       └── service.ts
│   │   ├── 📁 buy/
│   │   │   ├── page.tsx
│   │   │   ├── _hooks/useBuy.ts
│   │   │   └── _models/dms-product.ts
│   │   ├── 📁 faqs/
│   │   │   ├── page.tsx
│   │   │   └── _hooks/
│   │   │       ├── useFAQs.ts
│   │   │       ├── _models/faqs.ts
│   │   │       └── data/faqs.ts
│   │   ├── 📁 payment-recorded/[id]/
│   │   │   ├── page.tsx
│   │   │   ├── _hooks/usePaymentSuccess.ts
│   │   │   └── _models/purchase.ts
│   │   ├── 📁 privacy-policy/
│   │   │   └── page.tsx
│   │   ├── 📁 schedule/
│   │   │   ├── page.tsx
│   │   │   └── _hooks/
│   │   │       ├── useSchedule.ts
│   │   │       └── _models/schedule.ts
│   │   ├── 📁 terms/
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx (Home)
│   │
│   └── 📁 shared/
│       ├── 📁 components/
│       │   ├── LanguageSwitcher.tsx
│       │   └── 📁 ui/ (shadcn/ui components)
│       │       ├── accordion.tsx, alert.tsx, button.tsx...
│       │       └── (40+ UI components)
│       ├── 📁 contexts/
│       │   ├── AuthContext.tsx
│       │   └── 📁 i18n/
│       │       ├── I18nContext.tsx
│       │       └── 📁 data/ (translations)
│       │           ├── i18n.ts, common.ts, home.ts...
│       │           └── (20+ translation files)
│       ├── 📁 data/
│       │   ├── country-phone-codes.ts
│       │   └── public-routes.ts
│       ├── 📁 guards/
│       │   └── PreventRefreshGuard.tsx
│       ├── 📁 hooks/
│       │   ├── use-mobile.ts
│       │   └── use-toast.ts
│       ├── 📁 lib/
│       │   ├── db-dms-by-ivin-dev.ts
│       │   ├── get-stripejs.ts
│       │   ├── stripe.ts
│       │   └── utils.ts
│       ├── 📁 models/
│       │   ├── schedule.ts
│       │   └── system-user.ts
│       └── 📁 services/
│           ├── auth.ts, payment-recorded.ts, schedule.ts
│           └── 📁 models/auth.ts
│
├── AGENTS.md
├── README.md
├── components.json
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

**Built with ❤️ by [Ivin Dev](https://ivin-dev.com/)**

*Professional software engineer with 8+ years of experience in full-stack development, AI integration, and automotive industry solutions.*
