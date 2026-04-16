/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    const contactApiBaseUrl = process.env.CONTACT_API_URL?.trim();

    if (!contactApiBaseUrl) {
      return [];
    }

    return [
      {
        source: "/api/:path*",
        destination: `${contactApiBaseUrl}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
