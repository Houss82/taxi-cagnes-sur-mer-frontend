import { getAllPostSlugs, getAllPosts } from "./lib/blog";

const baseUrl = "https://taxi-cagnes-sur-mer.fr";

export default function sitemap() {
  const now = new Date();
  const allPosts = getAllPosts();

  // Créer un map pour accéder rapidement aux dates des articles
  const postDatesMap = {};
  allPosts.forEach((post) => {
    postDatesMap[post.slug] = post.date ? new Date(post.date) : now;
  });

  const staticPages = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/reservation", priority: 0.9, changeFrequency: "weekly" },
    { path: "/tarifs", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services", priority: 0.8, changeFrequency: "weekly" },
    {
      path: "/services/transfert-aeroport",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      path: "/services/chauffeur-prive",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      path: "/services/longue-distance",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      path: "/services/evenements",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
    {
      path: "/conditions-utilisation",
      priority: 0.5,
      changeFrequency: "yearly",
    },
    {
      path: "/politique-confidentialite",
      priority: 0.5,
      changeFrequency: "yearly",
    },
    { path: "/mentions-legales", priority: 0.5, changeFrequency: "yearly" },
  ].map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const blogPosts = getAllPostSlugs().map(({ slug }) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: postDatesMap[slug] || now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...blogPosts];
}
