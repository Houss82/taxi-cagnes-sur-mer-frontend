/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/taxi-antibes",
        destination: "/zones-desservies",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig

