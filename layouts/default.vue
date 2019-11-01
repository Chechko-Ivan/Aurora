<template>
  <div class="root">
    <Navbar>
      <Burger
        slot="burger"
        :opened="drawerOpend"
        @toggleDrawer="drawerOpend = !drawerOpend"
      ></Burger>
      <LangSwitcher slot="switcher"></LangSwitcher>
    </Navbar>
    <Container>
      <nuxt />
    </Container>
  </div>
</template>

<script>
import Container from '~/components/Container.vue';
import Navbar from '~/components/navbar/Navbar.vue';
import Burger from '~/components/Burger.vue';
import LangSwitcher from '~/components/LangSwitcher.vue';

export default {
  components: {
    Container,
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

<style lang="scss"></style>
