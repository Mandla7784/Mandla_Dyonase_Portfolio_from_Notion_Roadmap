import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },
  webpack: (config) => {
    config.resolve.alias["framer-motion"] = path.resolve(
      process.cwd(),
      "node_modules",
      "framer-motion"
    );
    return config;
  },
};

export default nextConfig;
