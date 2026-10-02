import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The repo root has its own package-lock.json for the Supabase CLI, so Next
  // cannot infer where the workspace stops.
  turbopack: {
    root: path.resolve(import.meta.dirname, "..", ".."),
  },

  // Next 16 blocks dev resources from any origin that is not localhost, which
  // means nothing hydrates when you open the dev server on your phone's LAN IP.
  // Add the local addresses you actually use here. Wildcards are supported.
  allowedDevOrigins: [
    "192.168.43.67",
    "192.168.*.*",
    "10.*.*.*",
  ],
};

export default nextConfig;
