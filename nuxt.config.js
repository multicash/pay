export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'MultiCash Pay',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Easily pay each other MultiCash by scanning the QR code with your MultiCash mobile app.',
      },

      // Open Graph / Facebook
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://pay.multicash.io' },
      { name: 'og:title', content: 'MultiCash Pay' },
      {
        name: 'og:description',
        content:
          'Easily pay each other MultiCash by scanning the QR code with your MultiCash mobile app.',
      },
      { name: 'og:image', content: '/social-banner.png' },
      { name: 'theme-color', content: '#F744E4' },

      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: 'https://pay.multicash.io' },
      { name: 'twitter:title', content: 'MultiCash Pay' },
      {
        name: 'twitter:description',
        content:
          'Easily pay each other MultiCash by scanning the QR code with your MultiCash mobile app.',
      },
      { name: 'twitter:image', content: '/social-banner.png' },
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'manifest',
        href: '/manifest.json',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
