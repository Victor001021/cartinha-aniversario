import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Em dev (localhost) usa '/', no build do GitHub Pages usa a subpasta
  base: command === "serve" ? "/" : "/cartinha-aniversario/",
}));
