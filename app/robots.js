const baseUrl = "https://taxi-cagnes-sur-mer.fr";

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
