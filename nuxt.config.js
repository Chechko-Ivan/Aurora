export default {
  mode: 'universal',

  head: {
    title: 'АВРОРАПЛАСТ',
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
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        href: '/favicon/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon/favicon-16x16.png'
      },
      {
        rel: 'mask-icon',
        color: '#5bbad5',
        href: '/favicon/safari-pinned-tab.svg'
      },
      {
        rel: 'msapplication-TileColor',
        content: '#2b5797'
      },
      {
        rel: 'theme-color',
        content: '#ffffff'
      }
    ]
  },

  // loading: '~/components/Loading.vue',
  loading: false,

  router: {
    middleware: 'i18n'
  },

  css: ['~/assets/style/index.scss', 'swiper/dist/css/swiper.css'],

  plugins: [
    // '~/plugins/baseComponents.js',
    {
      src: '~/plugins/swiper.js',
      ssr: false
    },
    '~/plugins/i18n.js',
    '~/plugins/antd.js'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/svg-sprite', '@nuxtjs/style-resources', '@nuxtjs/sitemap'],

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
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],

  /*
   ** Build configuration
   */
  build: {
    extend(config, ctx) {}
  }
};
