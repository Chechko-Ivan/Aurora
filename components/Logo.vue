<template>
  <nuxt-link class="logo" to="/">
    <picture>
      <source type="image/webp" srcset="~/static/images/logo.webp" />
      <source type="image/png" srcset="~/static/images/logo.png" />
      <img src="image.png" alt="Логотип" />
    </picture>
  </nuxt-link>
</template>

<script>
export default {
  name: 'Logo'
};
</script>

<style lang="scss" scoped>
.logo {
  display: inline-block;
  width: 190px;
}
</style>
