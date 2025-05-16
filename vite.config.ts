import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/geo-impact-web-forge/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    mode === 'production' && visualizer({ open: false }),
  ].filter(Boolean),
  build: {
    // Increase warning limit to avoid unnecessary warnings
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        // Optimize chunk size with manual chunks
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-components': [
            '@radix-ui/react-accordion',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-label',
            '@radix-ui/react-navigation-menu',
            '@radix-ui/react-popover',
            '@radix-ui/react-select',
            '@radix-ui/react-tabs',
          ],
          'charts-and-visuals': ['three', 'd3', 'recharts'],
        },
      }
    },
    // Image optimization settings
    assetsInlineLimit: 10000, // 10kb - larger files will be treated as assets
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
