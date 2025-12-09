import { About } from "@/components/about";
import { Banner } from "@/components/banner";
import { Contacts } from "@/components/contacts";
import { RunningImage } from "@/components/running-image";
import { Faq } from "@/components/faqs";
import Events from "@/components/event";
import HighlightSection from "@/components/why-us";
import { SponsorList } from "@/components/sponsor";

// ============ METADATA SEO ============
export const metadata = {
  metadataBase: new URL("https://gemafest.id"), // Ganti dengan domain asli
  title: {
    default: "Gema Fest 2026 - Festival Ramadhan Terbesar di Jakarta Timur",
    template: "%s | Gema Fest 2026"
  },
  description: "Gema Fest 2026 adalah festival Ramadhan terbesar di Mall Grand Cakung Jakarta Timur. Nikmati street food, live music, bazaar UMKM, dan berbagai hiburan spesial Ramadhan. 18 Februari - 19 Maret 2026.",
  keywords: [
    "Gema Fest 2026",
    "Festival Ramadhan Jakarta",
    "Event Ramadhan 2026",
    "Bazaar Ramadhan Jakarta Timur",
    "Mall Grand Cakung",
    "Street Food Festival Jakarta",
    "Live Music Ramadhan",
    "UMKM Jakarta",
    "Tenant Ramadhan",
    "Sponsor Event Jakarta",
    "Buka Puasa Jakarta",
    "Ngabuburit Jakarta",
    "Festival Kuliner Ramadhan",
    "Event Jakarta Timur 2026"
  ],
  authors: [{ name: "Gema Fest Team" }],
  creator: "Gema Fest",
  publisher: "Gema Fest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Open Graph untuk Social Media
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://gemafest.id",
    siteName: "Gema Fest 2026",
    title: "Gema Fest 2026 - Festival Ramadhan Terbesar di Jakarta Timur",
    description: "Bergabunglah di Gema Fest 2026! Festival Ramadhan dengan street food, live music, bazaar UMKM, dan hiburan spesial. 18 Feb - 19 Mar 2026 di Mall Grand Cakung.",
    images: [
      {
        url: "/og-image.jpg", // Buat image 1200x630px
        width: 1200,
        height: 630,
        alt: "Gema Fest 2026 - Festival Ramadhan Jakarta",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Gema Fest 2026 - Festival Ramadhan Terbesar di Jakarta Timur",
    description: "Street food, live music, bazaar UMKM & hiburan spesial Ramadhan. 18 Feb - 19 Mar 2026 di Mall Grand Cakung Jakarta.",
    images: ["/og-image.jpg"],
    creator: "@gemafest",
  },

  // Robots & Indexing
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

  // Verification (isi dengan kode verifikasi)
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },

  // Alternate Languages (jika ada)
  alternates: {
    canonical: "https://gemafest.id",
    languages: {
      "id-ID": "https://gemafest.id",
      "en-US": "https://gemafest.id/en",
    },
  },

  // Category
  category: "Event",
};

// ============ JSON-LD STRUCTURED DATA ============
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // Organization
    {
      "@type": "Organization",
      "@id": "https://gemafest.id/#organization",
      name: "Gema Fest",
      url: "https://gemafest.id",
      logo: {
        "@type": "ImageObject",
        url: "https://gemafest.id/logo.png",
        width: 512,
        height: 512,
      },
      sameAs: [
        "https://instagram.com/gemafest",
        "https://tiktok.com/@gemafest",
        "https://facebook.com/gemafest",
        "https://twitter.com/gemafest"
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+62-xxx-xxxx-xxxx",
        contactType: "customer service",
        availableLanguage: ["Indonesian", "English"],
      },
    },
    // Event
    {
      "@type": "Event",
      "@id": "https://gemafest.id/#event",
      name: "Gema Fest 2026 - Festival Ramadhan",
      description: "Festival Ramadhan terbesar di Jakarta Timur dengan street food, live music, bazaar UMKM, spot foto Instagrammable, dan berbagai hiburan spesial Ramadhan.",
      image: ["https://gemafest.id/og-image.jpg"],
      startDate: "2026-02-18T10:00:00+07:00",
      endDate: "2026-03-19T22:00:00+07:00",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "Mall Grand Cakung",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Jl. Raya Cakung Cilincing",
          addressLocality: "Jakarta Timur",
          addressRegion: "DKI Jakarta",
          postalCode: "13910",
          addressCountry: "ID",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -6.1866957,
          longitude: 106.9562817,
        },
      },
      organizer: {
        "@type": "Organization",
        name: "Gema Fest",
        url: "https://gemafest.id",
      },
      performer: {
        "@type": "PerformingGroup",
        name: "Various Artists & Local Communities",
      },
      offers: {
        "@type": "Offer",
        url: "https://gemafest.id/#contact",
        availability: "https://schema.org/InStock",
        priceCurrency: "IDR",
        validFrom: "2025-12-01",
      },
      keywords: "Festival Ramadhan, Street Food, Live Music, Bazaar UMKM, Jakarta Timur",
    },
    // WebSite
    {
      "@type": "WebSite",
      "@id": "https://gemafest.id/#website",
      url: "https://gemafest.id",
      name: "Gema Fest 2026",
      description: "Official website Gema Fest 2026 - Festival Ramadhan Terbesar di Jakarta Timur",
      publisher: { "@id": "https://gemafest.id/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://gemafest.id/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    // WebPage
    {
      "@type": "WebPage",
      "@id": "https://gemafest.id/#webpage",
      url: "https://gemafest.id",
      name: "Gema Fest 2026 - Festival Ramadhan Terbesar di Jakarta Timur",
      isPartOf: { "@id": "https://gemafest.id/#website" },
      about: { "@id": "https://gemafest.id/#event" },
      description: "Bergabunglah di Gema Fest 2026! Festival Ramadhan dengan street food, live music, bazaar UMKM di Mall Grand Cakung Jakarta Timur.",
      breadcrumb: { "@id": "https://gemafest.id/#breadcrumb" },
      inLanguage: "id-ID",
      datePublished: "2025-01-01T00:00:00+07:00",
      dateModified: new Date().toISOString(),
    },
    // BreadcrumbList
    {
      "@type": "BreadcrumbList",
      "@id": "https://gemafest.id/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://gemafest.id",
        },
      ],
    },
    // FAQPage
    {
      "@type": "FAQPage",
      "@id": "https://gemafest.id/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Kapan Gema Fest 2026 berlangsung?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Event akan berlangsung pada 18 Februari - 19 Maret tahun 2026 di Mall Grand Cakung, Jakarta Timur.",
          },
        },
        {
          "@type": "Question",
          name: "Apa keuntungan menjadi tenant di Gema Fest 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tenant akan mendapatkan exposure langsung ke ribuan pengunjung, kesempatan meningkatkan penjualan, brand awareness, dan potensi kolaborasi antar vendor/event.",
          },
        },
        {
          "@type": "Question",
          name: "Berapa biaya untuk sewa booth?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Biaya booth akan menyesuaikan kategori usaha, ukuran booth, serta fasilitas tambahan. Detail paket lengkap dapat dilihat pada proposal atau dengan menghubungi tim melalui WhatsApp.",
          },
        },
        {
          "@type": "Question",
          name: "Apa saja fasilitas yang didapatkan tenant?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Fasilitas meliputi area booth, listrik, keamanan, serta media exposure sesuai paket yang dipilih.",
          },
        },
        {
          "@type": "Question",
          name: "Apa benefit bagi sponsor di Gema Fest 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sponsor mendapatkan exposure brand yang luas secara offline maupun online, aktivasi brand experience, placement logo, hingga paket media sesuai tier sponsor.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
    
      <Banner />
      <RunningImage />

      <section id="about">
        <About />
      </section>

      <section id="why-us">
        <HighlightSection />
      </section>

      <section id="event">
        <Events />
      </section>

      <section id="faq">
        <Faq />
      </section>

      <SponsorList/>

      <section id="contact">
        <Contacts />
      </section>
    </>
  );
}
