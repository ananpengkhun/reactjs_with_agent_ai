import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

nextConfig.images = {
  remotePatterns: [
    new URL('https://images.dog.ceo/**')]
  }

const withNextIntl = createNextIntlPlugin()

export default withNextIntl(nextConfig);
