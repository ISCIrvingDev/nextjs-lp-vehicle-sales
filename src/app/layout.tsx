// * SEO
import type { Metadata } from "next";

// * Google Analytics & Google Tag Manager
import { GoogleTagManager } from '@next/third-parties/google'

// * Styles
import { Inter } from "next/font/google";
import "./globals.css";

// * Components
import Footer from "./_components/footer";
import { Toaster } from "@/shared/components/ui/toaster";

// * Contexts
import { I18nProvider } from "@/shared/contexts/i18n/I18nContext";
import { AuthProvider } from "@/shared/contexts/AuthContext";
import { PreventRefreshGuard } from "@/shared/guards/PreventRefreshGuard";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Vehicle Sales - Professional Vehicle Management System",
  description: "Complete vehicle sales management system with inventory tracking, customer management, financial reporting and authentication.",
  keywords: ["vehicle sales", "car dealership", "inventory management", "customer management", "automotive"],
  authors: [{ name: "Irving salazar" }, { name: "Ivin Dev" }],
  openGraph: {
    title: "Vehicle Sales Management System",
    description: "Professional vehicle sales and inventory management platform",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        <I18nProvider>
          <AuthProvider>
            {children}

            <Toaster />

            <PreventRefreshGuard />
          </AuthProvider>

          {/* Footer */}
          <Footer />
        </I18nProvider>
      </body>

      {
        process.env.NODE_ENV === 'production' && // Comentar esta linea en "development" para pruebas con "Vista previa" de "Google Tag Manager"
        process.env.NEXT_PUBLIC_IS_DEMO === 'true' && process.env.IS_DESKTOP === 'false' && process.env.GOOGLE_TAG_MANAGER_ID && <GoogleTagManager gtmId={process.env.GOOGLE_TAG_MANAGER_ID} />
      }
    </html>
  );
}
