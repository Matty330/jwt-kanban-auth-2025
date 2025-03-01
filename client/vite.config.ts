import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Vite Configuration
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    strictPort: true, // Prevents port conflicts
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
        secure: false,
      },
      "/auth": {
        target: "http://localhost:3001",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  esbuild: {
    loader: "tsx", // ✅ Ensures TypeScript files are correctly processed
  },
});
