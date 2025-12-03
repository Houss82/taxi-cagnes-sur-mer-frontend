import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import Header from "../../components/Header.jsx";
import ResponsiveTableWrapper from "../../components/ResponsiveTableWrapper.jsx";
import SEOBreadcrumb from "../../components/SEOBreadcrumb.jsx";
import { getAllPosts, getAllPostSlugs, getPostBySlug } from "../../lib/blog";

// Pré-générer toutes les pages au build
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((item) => ({ slug: item.slug }));
}

// ISR : régénérer toutes les heures
export const revalidate = 3600;

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  // Si l'article n'existe pas, retourner 404
  if (!post) {
    notFound();
  }

  // Récupérer les articles similaires (côté serveur)
  const allPosts = getAllPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const breadcrumbItems = [
    { name: "Blog", url: "/blog", title: "Blog Taxi Cagnes-sur-Mer" },
    { name: post.title, url: `/blog/${post.slug}`, title: post.title },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b pt-20 sm:pt-24">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <SEOBreadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* Article */}
      <article className="pt-4 pb-10 ">
        <div className="max-w-4xl mx-auto px-5 md:px-4 pt-6">
          {/* En-tête */}
          <div className="mb-6">
            <span className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>

          <h1 className="article-title">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>5 min de lecture</span>
            </div>
          </div>

          {/* Image principale */}
          <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              style={{
                objectPosition: "center center",
              }}
              priority={true}
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>

          {/* Contenu */}
          <ResponsiveTableWrapper
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          ></ResponsiveTableWrapper>

          {/* Mots-clés */}
          {post.keywords && post.keywords.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-2 flex-wrap">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  />
                </svg>
                {post.keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Schema JSON-LD Article */}
          <Script
            id="article-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                headline: post.title,
                image: `https://taxi-cagnes-sur-mer.fr${post.image}`,
                datePublished: post.date,
                dateModified: post.date,
                author: {
                  "@type": "Organization",
                  name: post.author || "Taxi Cagnes-sur-Mer",
                },
                publisher: {
                  "@type": "Organization",
                  name: "Taxi Cagnes-sur-Mer",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://taxi-cagnes-sur-mer.fr/logo1.png",
                  },
                },
                description: post.excerpt,
                articleSection: post.category,
                keywords: Array.isArray(post.keywords)
                  ? post.keywords.join(", ")
                  : post.keywords || "",
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": `https://taxi-cagnes-sur-mer.fr/blog/${post.slug}`,
                },
              }),
            }}
          />
        </div>
      </article>

      {/* Articles similaires */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Articles similaires
              </h2>
              <p className="text-lg text-gray-600">
                Continuez votre lecture avec nos autres guides et conseils
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-accent/20">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      {relatedPost.category && (
                        <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold mb-3">
                          {relatedPost.category}
                        </span>
                      )}
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-2 mb-4">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center text-accent font-semibold text-sm group-hover:gap-2 transition-all">
                        Lire l'article
                        <svg
                          className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
