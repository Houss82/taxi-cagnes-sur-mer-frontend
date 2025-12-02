const baseUrl = "https://taxi-cagnes-sur-mer.com";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/", "/_next/", "/*.ico$"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

