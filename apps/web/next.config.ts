import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The repo root has its own package-lock.json for the Supabase CLI, so Next
  // cannot infer where the workspace stops. Point it at the repo root so that
  // packages/ stays traceable once it exists.
  turbopack: {
    root: path.resolve(import.meta.dirname, "..", ".."),
  },
};

export default nextConfig;