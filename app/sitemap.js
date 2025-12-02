import { getAllPostSlugs, getAllPosts } from "../lib/blog";

const baseUrl = "https://taxi-cagnes-sur-mer.com";

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
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
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

