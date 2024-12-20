import { fileURLToPath, URL } from 'node:url'

  // https://nuxt.com/docs/api/configuration/nuxt-config

  function createAlias(relativePath: any) {
    return fileURLToPath(new URL(relativePath, import.meta.url))
  }

export default defineNuxtConfig({
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  compatibilityDate: '2024-11-01',
  devtools         : { enabled: true },
  alias            : {
    '@components' : createAlias('./components/'),

      // inner scss aliases
    '@styles'        : createAlias('./assets/styles/'),
    '@abstracts'     : createAlias('./assets/styles/abstracts'),
    '@scss-functions': createAlias('./assets/styles/abstracts/functions'),
    '@base'          : createAlias('./assets/styles/base'),

        // assets
    '@assets': createAlias('./assets'),
    '@images': createAlias('./assets/images'),
    '@fonts' : createAlias('./assets/fonts'),
    '@svg'   : createAlias('./assets/svg'),
  },
  modules: [
    '@pinia/nuxt',
    '@nuxt/fonts',
  ],
  fonts: {
    families: [
      {
        name    : 'montserrat',
        provider: 'google',
    }]
  },
  css : ['~/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData     : '@use "~/assets/styles/global" as *;',
          silenceDeprecations: ['legacy-js-api']
        }
      }
    }
  },
  app: {
    head: {
      title: 'Todo App',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      htmlAttrs: {
        class: 'html'
      },
      bodyAttrs:{
        class: 'body body--grid smooth-mesh-background'
      }
    },
  }
})