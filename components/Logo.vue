<template>
  <nuxt-link class="logo" to="/">
    <img src="~/static/images/Logo.svg" alt="Логотип" />
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
