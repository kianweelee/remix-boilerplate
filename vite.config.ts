/** @type {import('@remix-run/dev').AppConfig} */
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import { remixVitePlugin as remix } from "@remix-run/dev/dist/vite/plugin";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    remix({
      ignoredRouteFiles: ["**/.*"],
    }),
    tsconfigPaths(),
  ],
});
