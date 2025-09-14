import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://placaspr.com'),
  title: "PlacasPR - Energía Solar en Puerto Rico | Guías, Precios y Consultas Gratis",
  description: "Descubre las mejores placas solares para tu hogar en Puerto Rico. Compara precios, lee reseñas expertas y obtén una consulta gratuita con instaladores locales certificados.",
  keywords: "placas solares puerto rico, energia solar, paneles solares, tesla powerwall, generac, consulta gratis solar, instaladores solares puerto rico",
  authors: [{ name: "PlacasPR" }],
  openGraph: {
    title: "PlacasPR - Tu Guía de Energía Solar en Puerto Rico",
    description: "Guías completas, comparaciones y consultas gratuitas para tu proyecto solar en Puerto Rico.",
    url: "https://placaspr.com",
    siteName: "PlacasPR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PlacasPR - Energía Solar en Puerto Rico"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "PlacasPR - Energía Solar en Puerto Rico",
    description: "Tu guía confiable para energía solar en Puerto Rico",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code-here",
  }
};

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `}
        </Script>

        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "PlacasPR",
              "description": "Guía de energía solar en Puerto Rico",
              "url": "https://placaspr.com",
              "logo": "https://placaspr.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-787-123-4567",
                "contactType": "customer service",
                "areaServed": "PR",
                "availableLanguage": ["Spanish", "English"]
              },
              "areaServed": {
                "@type": "Place",
                "name": "Puerto Rico"
              }
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        
        <Script id="conversion-tracking" strategy="afterInteractive">
          {`
            window.trackConsultation = function() {
              if (typeof gtag !== 'undefined') {
                gtag('event', 'conversion', {
                  'send_to': 'GA_MEASUREMENT_ID/consultation_submit',
                  'value': 50.0,
                  'currency': 'USD'
                });
              }
            };

            window.trackAffiliateClick = function(platform, productId) {
              if (typeof gtag !== 'undefined') {
                gtag('event', 'affiliate_click', {
                  'platform': platform,
                  'product_id': productId,
                  'value': 10.0,
                  'currency': 'USD'
                });
              }
            };
          `}
        </Script>
      </body>
    </html>
  );
}
