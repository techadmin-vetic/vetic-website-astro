import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: true,
    port: 4321,
    strictPort: true,
    allowedHosts: ["vetic.in" , "www.vetic.in"],
    // hmr: {
    //   protocol: "ws",
    //   host: "localhost",
    //   port: 4321,
    // },
  },
  preview: {
    allowedHosts: ["vetic.in", "www.vetic.in"],
  },
});
