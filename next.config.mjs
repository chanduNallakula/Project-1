/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*", // Apply the header to all routes
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: process.env.NEXT_PUBLIC_APP_URL || "http://134.119.186.21/",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
