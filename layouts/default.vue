<template>
  <div class="root">
    <navbar :drawerOpend="drawerOpend">
      <Burger
        slot="burger"
        :opened="drawerOpend"
        @toggleDrawer="drawerOpend = !drawerOpend"
      ></Burger>
      <LangSwitcher
        slot="lang-switcher"
        :drawerOpend="drawerOpend"
      ></LangSwitcher>
    </navbar>

    <breadcrumb data-aos="fade" data-aos-delay="200">
      <breadcrumb-item
        v-if="breadcrumbsWithoutIndex.length"
        :style="{ zIndex: breadcrumbs.length + 2 }"
        :to="localePath('index')"
      >
        {{ $t('navbar.links.index') }}
      </breadcrumb-item>

      <breadcrumb-item
        v-if="breadcrumbsWithParams.length"
        :style="{ zIndex: breadcrumbs.length + 1 }"
        :to="localePath('products')"
      >
        {{ $t('navbar.links.products') }}
      </breadcrumb-item>

      <breadcrumb-item
        v-for="breadcrumb in breadcrumbsWithoutIndex"
        :key="breadcrumb.name"
        :to="localePath({ path: `/${breadcrumb.path}` })"
        :style="{ zIndex: 0 }"
        :long="breadcrumbsWithParams.length ? true : false"
      >
        {{
          breadcrumbsWithParams.length
            ? $t('products').find((product) => product.link === breadcrumb.name)
                .title
            : breadcrumb.name
        }}
      </breadcrumb-item>
    </breadcrumb>

    <navbar-drawer
      :opened="drawerOpend"
      @close-menu="drawerOpend = false"
    ></navbar-drawer>

    <div
      :class="[
        'layout-offset',
        {
          'with-breadcrumbs': breadcrumbs.length && breadcrumbsWithoutIndex
        }
      ]"
    >
      <nuxt v-if="init" />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '~/components/navbar/Navbar.vue';
import NavbarDrawer from '~/components/navbar/NavbarDrawer.vue';
import Breadcrumb from '~/components/breadcrumb/Breadcrumb.vue';
import BreadcrumbItem from '~/components/breadcrumb/BreadcrumbItem.vue';
import Footer from '~/components/footer/Footer.vue';
import Burger from '~/components/Burger.vue';
import LangSwitcher from '~/components/LangSwitcher.vue';

export default {
  head() {
    const i18nSeo = this.$nuxtI18nSeo();

    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
        prefix: 'og: http://ogp.me/ns#',
        ...i18nSeo.htmlAttrs
      },
      title: this.$t('seo.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('seo.description')
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$t('seo.title')
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$t('seo.description')
        },
        {
          property: 'og:site_name',
          content: this.$t('seo.title')
        },
        {
          property: 'og:image',
          content: 'https://avroraplast.ru/favicons/apple-touch-icon.png'
        },
        ...i18nSeo.meta
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          href: '/favicons/apple-touch-icon.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicons/favicon-32x32.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicons/favicon-16x16.png'
        },
        {
          rel: 'mask-icon',
          color: '#5bbad5',
          href: '/favicons/safari-pinned-tab.svg'
        },
        {
          rel: 'msapplication-TileColor',
          content: '#2b5797'
        },
        {
          rel: 'theme-color',
          content: '#ffffff'
        },
        ...i18nSeo.link
      ]
    };
  },

  components: {
    Navbar,
    NavbarDrawer,
    Breadcrumb,
    BreadcrumbItem,
    Footer,
    Burger,
    LangSwitcher
  },

  data() {
    return {
      drawerOpend: false,
      init: false
    };
  },

  computed: {
    breadcrumbs() {
      const breadcrumbs = [];

      this.toggleDrawer();

      this.$route.matched.map((item, i, { length }) => {
        const breadcrumb = {};
        breadcrumb.path =
          item.path.substring(0, 4) === '/en/'
            ? item.path.replace(/\/en\//g, '')
            : item.path.replace(/\//g, '');
        breadcrumb.name = this.$t(
          `navbar.links.${breadcrumb.path.length ? breadcrumb.path : 'index'}`
        );

        if (this.$route.params.product) {
          breadcrumb.path =
            this.$route.path.substring(0, 4) === '/en/'
              ? this.$route.path.replace(/\/en\//g, '')
              : this.$route.path.replace(/\//g, '');
          breadcrumb.name = this.$route.params.product;
        }
        breadcrumbs.push(breadcrumb);
      });
      return breadcrumbs;
    },

    breadcrumbsWithoutIndex() {
      return this.breadcrumbs.filter(
        (breadcrumb) =>
          breadcrumb.name !== this.$t('navbar.links.index') &&
          breadcrumb.path !== 'en'
      );
    },

    breadcrumbsWithParams() {
      return this.breadcrumbs.filter((breadcrumb) =>
        this.$t('products').find((product) => product.link === breadcrumb.name)
      );
    }
  },

  created() {
    this.$store.dispatch('getLocation');
  },

  mounted() {
    this.$nextTick(() => {
      this.init = true;
    });
  },

  methods: {
    toggleDrawer() {
      this.drawerOpend = false;
    }
  }
};
</script>

<style lang="scss">
.layout-offset {
  margin-top: 125px;
  padding-top: 80px;

  @media (max-width: $osx) {
    margin-top: 105px;
  }

  @media (max-width: $md) {
    margin-top: 80px;
  }

  @media (max-width: $sm) {
    margin-top: 70px;
    padding-top: 50px;
  }

  &.with-breadcrumbs {
    padding-top: 120px;

    @media (max-width: $sm) {
      padding-top: 70px;
    }
  }
}
</style>
