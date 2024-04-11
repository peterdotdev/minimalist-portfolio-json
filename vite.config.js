export default {
    build: {
      rollupOptions: {
        external: ['@/layouts/Layout.astro', '@/components/sections/About.astro']
      }
    }
  }