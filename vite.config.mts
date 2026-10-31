import {defineConfig} from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      include: /\.[jt]sx?$/,
      jsxRuntime: "classic"
    })
  ],
  base: "/",
  esbuild: {
    loader: "tsx",
    include: /src\/.*\.[jt]sx?$/,
    exclude: []
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "tsx"
      }
    }
  },
  server: {
    host: "0.0.0.0",
    port: 3000
  },
  test: {
    environment: "jsdom",
    globals: true
  }
});
