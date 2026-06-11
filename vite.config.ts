import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  build: { outDir: 'docs' },
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [tailwindcss()],
});
