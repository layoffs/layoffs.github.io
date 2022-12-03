const globalMetadata = {
  description: 'A Viva Decora, sucesso em SEO, portal de decoração mais acessado da América Latina desligou 15 funcionários de uma só vez em Novembro de 2022.',
  title: 'Layoff: Viva Decora',
  canonical: 'https://layoffvd.com.br',
  image: {
    path: '/screenshot.png',
    width: 1200,
    height: 630
  }
}

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: globalMetadata.title,
    htmlAttrs: {
      lang: 'pt',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'canonical', name: 'canonical', content: globalMetadata.canonical },
      { hid: 'description', name: 'description', content: globalMetadata.description },      
      { hid: 'og:url', name: 'og:url', content: globalMetadata.canonical },
      { hid: 'og:image', name: 'image', property: 'og:image', content: `${globalMetadata.canonical}${globalMetadata.image.path}` },
      { hid: 'og:imageWidth', name: 'og:imageWidth', content: globalMetadata.image.width },
      { hid: 'og:imageHeight', name: 'og:imageHeight', content: globalMetadata.image.height },
      { hid: 'og:title', name: 'og:title', content: globalMetadata.title },
      { hid: 'og:description', property: 'og:description', name: 'description', content: globalMetadata.description },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  // Define target https://nuxtjs.org/pt/announcements/going-full-static/
  target: 'static'
}
