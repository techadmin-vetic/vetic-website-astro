import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: true,
    strictPort: true,
    allowedHosts: ["vetic.in"],
  },
  preview: {
    allowedHosts: ["vetic.in" , 'www.vetic.in' ],
  },
});