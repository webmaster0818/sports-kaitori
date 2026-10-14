import { SITE_URL, SITE_NAME, OPERATOR } from "../lib/site";

/** サイト共通: Organization + WebSite（layoutで1回だけ出力）。評価値・架空レビューは含めない。 */
export default function SiteJsonLd() {
  const data = [
    { "@context": "https://schema.org", "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: OPERATOR, url: `${SITE_URL}/` },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      alternateName: "sports-sell.com",
      url: `${SITE_URL}/`,
      inLanguage: "ja",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
