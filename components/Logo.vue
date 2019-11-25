<template>
  <nuxt-link class="logo" to="/">
    <img :src="src" alt="Логотип" />
  </nuxt-link>
</template>

<script>
import Logo from '~/static/images/Logo.svg';

export default {
  name: 'Logo',

  props: {
    src: {
      type: String,
      default: Logo
    }
  }
};
</script>

<style lang="scss" scoped>
.logo {
  display: inline-block;
  width: 190px;
}
</style>
