import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   output: 'export',      // Required: Tells Next.js to create the 'out' folder
  images: {
    unoptimized: true,  // Required: GitHub Pages doesn't support the Image Optimization API
  },
};

module.exports = nextConfig;
