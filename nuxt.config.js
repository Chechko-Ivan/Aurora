export default {
  mode: 'spa',

  generate: {
    fallback: true,
    routes: [
      '/products/sandwich_panel',
      '/products/pvc_sheet',
      '/products/pvc_window_sill',
      '/products/stand_profile',
      '/products/start_and_finish_profiles',
      '/products/pvc_thermal_inserts',
      '/en/products/sandwich_panel',
      '/en/products/pvc_sheet',
      '/en/products/pvc_window_sill',
      '/en/products/stand_profile',
      '/en/products/start_and_finish_profiles',
      '/en/products/pvc_thermal_inserts'
    ]
  },

  head: {
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ]
  },

  loading: false,

  router: {},

  css: [
    '~/assets/style/index.scss',
    'aos/dist/aos.css',
    'swiper/dist/css/swiper.css'
  ],

  plugins: [
    '~/plugins/aos.js',
    '~/plugins/antd.js',
    {
      src: '~/plugins/swiper.js',
      ssr: false
    }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/svg-sprite',
    '@nuxtjs/style-resources',
    [
      'nuxt-i18n',
      {
        defaultLocale: 'ru',
        locales: [
          {
            code: 'ru',
            name: 'рус',
            file: 'ru.js'
          },
          {
            code: 'en',
            name: 'eng',
            file: 'en.js'
          }
        ],
        strategy: 'prefix_except_default',
        lazy: true,
        seo: true,
        langDir: 'locales/'
      }
    ],
    [
      '@nuxtjs/sitemap',
      {
        gzip: true,
        hostname: 'https://avroraplast.ru',
        defaults: {
          lastmod: new Date(),
          lastmodrealtime: true,
          changefreq: 'daily',
          priority: 1
        }
      }
    ]
  ],

  svgSprite: {
    input: '~/static/sourceIcons/',
    output: '~/static/icons/',
    defaultSprite: 'sprite-svg'
  },

  styleResources: {
    scss: ['~/assets/style/vars.scss', '~/assets/style/mixins.scss']
  },

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/eslint-module'],

  /*
   ** Build configuration
   */
  build: {
    extend(config, ctx) {}
  }
};
