/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    const contactApiBaseUrl =
      process.env.CONTACT_API_URL || "http://127.0.0.1:8787";

    return [
      {
        source: "/api/:path*",
        destination: `${contactApiBaseUrl}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
