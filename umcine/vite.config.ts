import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    tanstackRouter({ autoCodeSplitting: true }),
    react(),
    tailwindcss(),
    svgr({
      include: "**/*.svg",
      svgrOptions: {
        exportType: "default",
        replaceAttrValues: { black: "currentColor" },
      },
    }),
  ],
});
