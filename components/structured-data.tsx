export function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Gebäudereinigung Pütz UG",
    "image": [
      "https://www.gebaeudereinigung-puetz.de/og-image.jpg"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Musterstraße 123",
      "addressLocality": "Musterstadt",
      "postalCode": "12345",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.0000,
      "longitude": 8.0000
    },
    "url": "https://www.gebaeudereinigung-puetz.de",
    "telephone": "+491234567890",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "14:00"
      }
    ],
    "priceRange": "€€",
    "description": "Professionelle Gebäudereinigung für Unternehmen und Privathaushalte. Zuverlässig, gründlich und zu fairen Preisen.",
    "sameAs": [
      "https://www.facebook.com/gebaeudereinigungpuetz",
      "https://www.instagram.com/gebaeudereinigungpuetz"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Reinigungsdienstleistungen",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Büroreinigung",
            "description": "Professionelle Reinigung von Büroräumen"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fensterreinigung",
            "description": "Gründliche Reinigung von Fenstern und Glasflächen"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Grundreinigung",
            "description": "Intensive Grundreinigung von Gebäuden und Räumlichkeiten"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
} 