import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/*.test.ts",
      "**/__tests__/**",
      "**/build/**",
    ],
  },
});
