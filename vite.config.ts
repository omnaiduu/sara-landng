import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { nitroV2Plugin } from "@tanstack/nitro-v2-vite-plugin";
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tsconfigPaths(),
    tanstackStart({
      pages: [
        {
          path: "/",
          prerender: {
            enabled: true,
          },
        },
      ],
    }),
    nitroV2Plugin({
      preset: "vecrel",
    }),
    viteReact(),
    tailwindcss(),
    {
      name: "css-ssr-plugin",
      enforce: "pre",
      resolveId(id) {
        // Intercept CSS imports during SSR and return a dummy module
        if (id.endsWith(".css") || id.endsWith(".min.css")) {
          return { id: id, moduleSideEffects: false };
        }
      },
      load(id) {
        // Return empty module for CSS files during SSR
        if (id.endsWith(".css") || id.endsWith(".min.css")) {
          return "export default {}";
        }
      },
    },
  ],
  ssr: {
    noExternal: ["streamdown", "rehype-katex"],
  },
});
