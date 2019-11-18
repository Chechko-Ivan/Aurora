<template>
  <nuxt-link :to="to" class="navbar-link"><slot></slot></nuxt-link>
</template>

<script>
export default {
  name: 'NavbarLink',

  props: {
    to: {
      type: String,
      default: '/'
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar-link {
  font-weight: 600;
  font-size: 18px;
  line-height: 1;
  color: $color-black;
  text-transform: uppercase;

  @media (max-width: $osx) {
    font-size: 16px;
  }

  &:hover {
    color: $color-primary;
  }
}
</style>
