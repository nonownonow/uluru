import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "~": resolve(__dirname, "./src"),
    },
  },
});
