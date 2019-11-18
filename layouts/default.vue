<template>
  <div class="root">
    <Navbar>
      <Burger
        slot="burger"
        :opened="drawerOpend"
        @toggleDrawer="drawerOpend = !drawerOpend"
      ></Burger>
      <LangSwitcher slot="lang-switcher"></LangSwitcher>
    </Navbar>

    <div class="layout-offset">
      <nuxt />
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/navbar/Navbar.vue';
import Burger from '~/components/Burger.vue';
import LangSwitcher from '~/components/LangSwitcher.vue';

export default {
  components: {
    Navbar,
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
