import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import Script from "next/script"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://pqrix.com"),
  title: {
    default: "Pqrix | Best Software Development Company in Bangladesh | #1 Web, Mobile & Desktop Solutions",
    template: "%s | Pqrix - Leading Tech Company Bangladesh"
  },
  description: "🏆 Best & Top-rated software development company in Bangladesh. Expert tech solutions: Web Development, Mobile Apps, SaaS, Cloud, AI/ML, Blockchain, IoT, Desktop Software, 3D/XR. Award-winning IT company with 500+ projects. Local payment (bKash/Nagad). Affordable pricing from ৳8,500.",
  keywords: [
    "software development company Bangladesh",
    "software company in Bangladesh",
    "IT company Bangladesh",
    "tech company Bangladesh",
    "best software company Bangladesh",
    "top software company Bangladesh",
    "web development Bangladesh",
    "mobile app development Bangladesh",
    "SaaS development",
    "cloud computing",
    "AI development",
    "machine learning",
    "blockchain development",
    "IoT solutions",
    "desktop application development",
    "3D web development",
    "WebGL development",
    "software outsourcing Bangladesh",
    "custom software development",
    "enterprise software",
    "e-commerce development",
    "bKash integration",
    "Nagad integration",
    "payment gateway integration",
    "software consultation",
    "IT solutions Bangladesh",
    "digital transformation",
    "API development",
    "database development",
    "UI/UX design",
    "DevOps services",
    "cybersecurity",
    "software maintenance",
    "agile development",
    "MVP development",
    "startup software",
    "software for SME",
    "affordable software development",
    "fixed price software development"
  ],
  authors: [{ name: "Pqrix Studio" }],
  creator: "Pqrix",
  publisher: "Pqrix",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pqrix.com",
    siteName: "Pqrix",
    title: "Pqrix | Professional Software Development Company in Bangladesh",
    description: "Expert software development services in Bangladesh: Web/SaaS Development, Mobile Apps, 3D Web/XR, Desktop Applications. Local payment integration (bKash/Nagad). Starting ৳8,500.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pqrix - Software Development Company Bangladesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pqrix | Software Development Company in Bangladesh",
    description: "Leading software development company offering Web/SaaS, Mobile Apps, 3D Web/XR, and Desktop Solutions in Bangladesh.",
    images: ["/og-image.png"],
    creator: "@pqrix",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://pqrix.com",
  },
  category: "Software Development Services",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* Structured Data for Organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Pqrix",
              alternateName: ["Pqrix Software", "Pqrix Tech", "Pqrix Bangladesh"],
              url: "https://pqrix.com",
              logo: "https://pqrix.com/icon-512.png",
              description: "Best and top-rated software development company in Bangladesh. Expert in Web Development, Mobile Apps, SaaS, AI/ML, Blockchain, IoT, Cloud Computing, Desktop Software, and 3D/XR solutions.",
              foundingDate: "2020",
              slogan: "Premium Custom Software Solutions For Your Business",
              sameAs: [
                "https://twitter.com/pqrix",
                "https://www.youtube.com/@pqrix",
                "https://instagram.com/pqrix",
                "https://linkedin.com/company/pqrix",
                "https://facebook.com/pqrix",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+880-1401-658685",
                contactType: "customer service",
                availableLanguage: ["English", "Bengali"],
                areaServed: ["BD", "US", "GB", "CA", "AU"],
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "BD",
                addressRegion: "Dhaka",
                addressLocality: "Dhaka"
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "500",
                bestRating: "5",
                worstRating: "1"
              },
              priceRange: "৳৳৳"
            })
          }}
        />

        {/* Structured Data for Professional Service */}
        <Script
          id="service-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Pqrix Software Development",
              image: "https://pqrix.com/icon-512.png",
              url: "https://pqrix.com",
              telephone: "+880-1401-658685",
              priceRange: "৳8,500 - ৳5,00,000+",
              address: {
                "@type": "PostalAddress",
                addressCountry: "BD",
                addressRegion: "Dhaka",
                addressLocality: "Dhaka"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 23.8103,
                longitude: 90.4125
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "00:00",
                closes: "23:59"
              }
            })
          }}
        />

        {/* LocalBusiness Schema for Bangladesh Local SEO */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Pqrix - Best Software Company in Bangladesh",
              description: "Top-rated software development company in Bangladesh. Expert in web, mobile, cloud, AI/ML, and blockchain solutions.",
              image: "https://pqrix.com/icon-512.png",
              telephone: "+880-1401-658685",
              email: "info@pqrix.com",
              address: {
                "@type": "PostalAddress",
                addressCountry: "Bangladesh",
                addressRegion: "Dhaka Division",
                addressLocality: "Dhaka"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 23.8103,
                longitude: 90.4125
              },
              url: "https://pqrix.com",
              priceRange: "৳৳৳",
              openingHours: "Mo-Su 00:00-23:59",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "500"
              }
            })
          }}
        />

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NFLHXXGK');`}
        </Script>

        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-W6LV22900R" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W6LV22900R');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </body>
    </html>
  )
}
