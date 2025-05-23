import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cssInject from "vite-plugin-css-injected-by-js";
import { resolve } from "path";
import type { ConfigEnv } from "vite";

export default ({ command }: ConfigEnv) => ({
  plugins: [react(), cssInject()],
  preview: {
    port: 74100,
    open: true,
  },
  build: {
    rollupOptions: {
      input: resolve(__dirname, "src/MicroFrontend.tsx"),
      preserveEntrySignatures: "exports-only",
      external: ["react", "react-dom"],
      output: {
        entryFileNames: "bundle.js",
        format: "esm",
      },
    },
  },
});