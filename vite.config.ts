import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Allows using describe, it, expect, etc., globally without imports
    environment: "jsdom", // Use JSDOM for DOM simulation
    setupFiles: "./src/tests/setup.ts", // Path to your setup file (create this next)
  },
});
