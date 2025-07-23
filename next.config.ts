import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

nextConfig.images = {
  remotePatterns: [
    new URL('https://images.dog.ceo/**')]
  }
export default nextConfig;
