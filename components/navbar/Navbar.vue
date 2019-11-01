<template>
  <nav class="navbar">
    <div class="navbar-inner">
      <div class="navbar-logo">
        <Logo></Logo>
      </div>

      <slot name="burger"></slot>
      <slot name="lang-switcher"></slot>
    </div>
  </nav>
</template>

<script>
import Logo from '~/components/Logo.vue';

export default {
  name: 'Navbar',

  components: {
    Logo
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 125px;
  padding-left: 40px;
  box-sizing: border-box;

  .burger {
    margin-left: auto;
  }
}

.navbar-inner {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
