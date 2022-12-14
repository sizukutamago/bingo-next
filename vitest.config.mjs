/// <reference types="vitest" />
import { fileURLToPath } from "url";
import { configDefaults, defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "happy-dom",
    exclude: [...configDefaults.exclude],
    alias: {
      "~/": fileURLToPath(new URL("./src/", import.meta.url)),
    },
  },
});
