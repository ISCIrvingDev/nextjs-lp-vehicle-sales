# AGENTS.md

This file provides guidelines for agentic coding agents working on this Next.js vehicle sales management system.

## Build/Lint/Test Commands

```bash
# Development
npm run dev          # Start development server at http://localhost:3000

# Build
npm run build        # Build for production

# Production
npm run start        # Start production server

# Linting
npm run lint         # Run ESLint

# Database
npm run db:generate  # Generate Prisma client after schema changes
npm run db:push      # Push schema changes to database (dev)
npm run db:migrate   # Run database migrations
npm run db:reset     # Reset database (WARNING: destructive)
npm run db:seed      # Seed database with admin user

# IMPORTANT: This project does NOT have test scripts configured.
# No test framework (Jest, Vitest, etc.) is present.
# Do not attempt to run tests - npm test or similar commands do not exist.
```

## Code Style Guidelines

### Imports

Organize imports with section comments using `// *` format:

```typescript
// * React
import { useState, useEffect } from "react";

// * NextJS
import { useRouter } from "next/navigation";

// * Components
import { Button } from "@/shared/components/ui/button";

// * Icons
import { Plus, Edit } from "lucide-react";

// * Models
import { Customer } from "./_models/customer";

// * Services
import { getCustomers } from "@/shared/services/customer";

// * Custom Hooks
import { useToast } from "@/shared/hooks/use-toast";

// * Contexts
import { useAuth } from "@/shared/contexts/AuthContext";
```

### Client/Server Components

- Client components must start with `'use client';` directive at the top
- Server actions/functions use `"use server";` directive
- Services are server-side by default (no directive needed)

### Directory Structure (MVVM Pattern)

Each dashboard module follows this structure:

```
src/app/(dashboard)/module-name/
├── page.tsx                   # View: Main component (presentation layer)
├── _hooks/
│   ├── useModule.ts           # ViewModel: Custom hook (logic layer)
│   └── _models/
│       └── module.ts          # Model: TypeScript interfaces (model layer)
```

### Naming Conventions

- **Files**: kebab-case for pages (`customers.tsx`), PascalCase for components (`Header.tsx`)
- **Components**: PascalCase (`export function Customers() {}`)
- **Hooks**: camelCase with `use` prefix (`export function useCustomers() {}`)
- **Functions**: camelCase (`handleSubmit`, `fetchCustomers`)
- **Constants**: UPPER_SNAKE_CASE for env vars (`VEHICLE_SALES_API_URL`)
- **Interfaces/Types**: PascalCase (`interface Customer {}`, `type SystemUser {}`)

### TypeScript

- Strict mode enabled
- Path alias `@/*` maps to `./src/*`
- Use explicit return types for exported functions
- No implicit any (though eslint rule is disabled)
- Interface definitions in `_models` folders within feature directories
- Shared models in `src/shared/models/`

### Styling

- **Tailwind CSS** for all styling
- Use `cn()` utility from `@/shared/lib/utils` for conditional classes
- Dark theme with color tokens: `bg-background`, `text-foreground`, `border-border`
- Component variants: `bg-primary`, `text-primary-foreground`, `text-muted-foreground`
- Custom hover effects: use `.card-hover` class for cards
- Use semantic color tokens (primary, destructive, accent) not raw colors

### Components

- Use **shadcn/ui** components from `@/shared/components/ui/*`
- Icons from **lucide-react**
- Components are exported by default: `export default function PageName() {}`
- Use controlled components for forms with `formData` state
- Dialogs/Modals use Radix UI components with proper open/close state

### State Management

- **React hooks** (useState, useEffect) for component state
- **Context API** for global state (AuthContext, I18nContext)
- **Zustand** for complex state (if needed)
- Custom hooks in `_hooks` folders to encapsulate logic
- Token stored in localStorage with key `"token"`

### Error Handling

```typescript
try {
  const data = await someApiCall(token, params);
  // Handle success
} catch (error) {
  console.error("Descriptive error message:", error);
  toast({
    description: "User-friendly error message",
    variant: "error",
    duration: 5000,
  });
}
```

- Use try/catch for async operations
- Console.error for logging
- Use toast notifications for user feedback
- Error variant in toast: "error" or "success"
- Duration: 5000ms standard

### API/Services

- Services located in `src/shared/services/`
- Server actions marked with `"use server"`
- Use `process.env.VEHICLE_SALES_API_URL` for API base URL
- JWT authentication via Authorization header: `Bearer ${token}`
- All fetch calls use await and return `response.json()`
- Create separate service functions per CRUD operation

### Guards and Protection

- **AuthGuard**: Protects dashboard routes (in `src/shared/guards/AuthGuard.tsx`)
- **useGuard()**: Hook for role-based access control
- Role-based module permissions checked against `user.role.modules`
- Public routes defined in `src/app/data/public-routes.ts`

### Internationalization

- Context: `useI18n()` from `@/shared/contexts/i18n/I18nContext`
- Translation function: `t('translationKey')`
- Supported locales: "en", "es"
- Locale stored in localStorage
- Translation keys in `src/shared/contexts/i18n/data/i18n.ts`

### Forms

- Use `handleSubmit` with `React.FormEvent` type
- Controlled inputs with `formData` state and `setFormData` updater
- Reset form with `resetForm()` function clearing all fields
- Edit mode: populate form from entity data
- Required fields marked in HTML with `required` attribute

### Loading States

- Show loading spinner/message while `isLoading` is true
- Check `isValidUser` guard before rendering protected content
- Pattern:

```typescript
if (isLoading || !isValidUser) {
  return <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="text-foreground">Loading {t('module')}...</div>
  </div>;
}
```

### Environment Variables

Required `.env` variables:

- `DATABASE_URL` - SQLite database path
- `VEHICLE_SALES_API_URL` - API backend URL
- `JWT_SECRET` - JWT signing secret

### ESLint Configuration

Many rules are disabled in `eslint.config.mjs`:

- `@typescript-eslint/no-explicit-any`: off
- `@typescript-eslint/no-unused-vars`: off
- `react-hooks/exhaustive-deps`: off
- `no-console`: off

Note: Linting may not catch all issues. Be thorough in code review.

### Prisma/Database

- Schema in `prisma\db-dms-by-ivin-dev\schema.prisma`
- Generate client after schema changes: `npm run db:generate`
- Push changes to dev database: `npm run db:push`
- Use SQLite provider
- Model relationships defined with proper foreign keys
- Timestamps: `createdAt @default(now())`, `updatedAt @updatedAt`

### Authentication Flow

1. Login via `/signin` page
2. Token stored in localStorage
3. User object in AuthContext
4. Token refreshed on user activity (click/keydown)
5. Guards redirect to `/signin` if invalid/unauthorized

### Git Workflow

- Main development branch
- Feature branches for new functionality
- Commit messages: concise, descriptive
- Always run `npm run lint` before committing

## API Routes Structure

Internal API routes using Next.js App Router (Route Handlers).

### Directory Structure (MCS Pattern)

MCS stands for Model-Controller-Service
Each API module follows this structure:

```
src/app/api/
├── module-name-a/
│   ├── route.ts                      # Controller: /api/module-name-a
│   └── service.ts                    # Service: Business logic (the Model is called within the service)
└── module-name-b/
    ├── route.ts                      # Controller: /api/module-name-b
    ├── service.ts                    # Service: Business logic (the Model is called within the service)
    └── [id]/                         # Routes with params
        ├── route.ts                  # Controller: /api/module-name-b/[id]
        └── service.ts                # Service: Business logic (the Model is called within the service)
```

### Endpoints

| Method | Endpoint                              | Description                                           |
| ------ | ------------------------------------- | ----------------------------------------------------- |
| GET    | `/api`                                | Health check - returns `{ message: "Hello, world!" }` |
| POST   | `/api/stripe`                         | Creates a Stripe checkout session, returns `{ url }`  |
| GET    | `/api/payment-recorded?sessionId=xxx` | Records/verifies payment from Stripe session          |

### Code Conventions

Each API module follows this pattern:

```
src/app/api/{module}/
├── route.ts      # HTTP handlers (GET, POST, PUT, DELETE)
└── service.ts    # Business logic functions
```

**route.ts** - Handles HTTP request/response:

```typescript
// * NextJS (Library)
import { NextRequest, NextResponse } from "next/server";

// * Services (Internal service)
import { upsertPurchase } from "./service";

export async function GET(request: NextRequest) {
  // Handle request...
}
```

**service.ts** - Contains business logic:

```typescript
// * NextJS (Library)
import { NextResponse } from "next/server";

// * Repositories (Database)
import { dbDmsByIvinDev } from "@/shared/lib/db-dms-by-ivin-dev";

// * External Libraries
import { stripe } from "@/shared/lib/stripe";
import Stripe from "stripe";

export async function upsertPurchase(sessionId: string) {
  // Business logic...
}
```

### Import Categories for API Routes

When adding imports to API route files, organize them with these comments:

- `// * NextJS (Library)` - Next.js server utilities
- `// * Services (Internal service)` - Local service functions from `./service`
- `// * Repositories (Database)` - Prisma clients or database access
- `// * External Libraries` - Third-party packages (Stripe, etc.)

### API: Error Handling

```typescript
export async function POST() {
  try {
    const data = await someService();
    return NextResponse.json({ data });
  } catch (error: any) {
    console.error("POST - /api/endpoint: ", error);
    return NextResponse.json(
      { error: error.message },
      { status: error.statusCode || 500 },
    );
  }
}
```

## Notes for Agents

- This is a Next.js 16 project with App Router
- Uses TypeScript 5 with strict mode
- No test framework is present - do not add or run tests
- Follow existing patterns when adding new features
- Check similar modules for implementation patterns
- Maintain dark theme consistency
- Use existing shadcn/ui components before creating new ones
- All services are server-side, hooks are client-side
- MVVM pattern: Models (types) → ViewModel (hooks) → View (components)
