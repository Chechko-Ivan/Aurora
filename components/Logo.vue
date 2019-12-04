<template>
  <nuxt-link :to="localePath('index')" class="logo">
    <img :src="this.$i18n.locale === 'ru' ? src : LogoEn" alt="Логотип" />
  </nuxt-link>
</template>

<script>
import Logo from '~/static/images/Logo.svg';
import LogoEn from '~/static/images/LogoEn.svg';

export default {
  name: 'Logo',

  props: {
    src: {
      type: String,
      default: Logo
    }
  },

  data() {
    return {
      LogoEn
    };
  }
};
</script>

<style lang="scss" scoped>
.logo {
  display: inline-block;
  width: 190px;
}
</style>
