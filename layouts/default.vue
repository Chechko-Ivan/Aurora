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

    <navbar-drawer :opened="drawerOpend"></navbar-drawer>

    <div class="layout-offset">
      <nuxt />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '~/components/navbar/Navbar.vue';
import NavbarDrawer from '~/components/navbar/NavbarDrawer.vue';
import Footer from '~/components/footer/Footer.vue';
import Burger from '~/components/Burger.vue';
import LangSwitcher from '~/components/LangSwitcher.vue';

export default {
  components: {
    Navbar,
    NavbarDrawer,
    Footer,
    Burger,
    LangSwitcher
  },

  data() {
    return {
      drawerOpend: false
    };
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
}
</style>
