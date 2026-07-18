import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Allow locally-hosted SVG university logos (served from /public only).
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async redirects() {
    return [
      // Canonical host: apex domain. www resolves but permanently redirects,
      // so search engines consolidate all signals on https://drkimvirdhillon.com.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.drkimvirdhillon.com" }],
        destination: "https://drkimvirdhillon.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
