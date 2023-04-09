/// <reference types="vitest" />
import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  return: {
    globals: true,
    environment: "happy-dom",
    setupFiles: "./src/setup.ts",
    publicDir: "dist",
  },
})
