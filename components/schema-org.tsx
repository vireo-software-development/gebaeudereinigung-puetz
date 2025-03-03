import Script from "next/script"

export function SchemaOrg() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Gebäudereinigung Pütz UG",
    "image": "https://www.gebaeudereinigung-puetz.de/og-image.jpg",
    "@id": "https://www.gebaeudereinigung-puetz.de",
    "url": "https://www.gebaeudereinigung-puetz.de",
    "telephone": "+49 2403 5192438",
    "email": "info@gebaeudereinigung-puetz.de",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Talstraße 154",
      "addressLocality": "Eschweiler",
      "postalCode": "52249",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.8209,
      "longitude": 6.2647
    },
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
        "closes": "17:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/gebaeudereinigung.puetz"
    ],
    "priceRange": "€€",
    "description": "Ihr zuverlässiger Partner für professionelle Gebäudereinigung und Reinigungsdienstleistungen in der Region. ✓ Erfahren ✓ Zuverlässig ✓ Qualitativ",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 50.8209,
        "longitude": 6.2647
      },
      "geoRadius": 50000
    },
    "makesOffer": [
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

  return (
    <Script id="schema-org" type="application/ld+json">
      {JSON.stringify(schemaData)}
    </Script>
  )
} 