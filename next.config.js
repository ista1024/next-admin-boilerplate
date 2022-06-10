/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "/",
  },
  async rewrites() {
    return [
      {
        source: "/kms/:path*",
        destination: `http://localhost:8095/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
