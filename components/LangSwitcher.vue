<template>
  <div class="lang-switcher">
    <nuxt-link
      :to="`/ru${$route.fullPath}`"
      class="lang-switcher-link active"
      exact
      >{{ $t('navbar.locales.ru') }}</nuxt-link
    >
    <nuxt-link :to="`/en${$route.fullPath}`" class="lang-switcher-link" exact>{{
      $t('navbar.locales.en')
    }}</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'LangSwitcher'
};
</script>

<style lang="scss" scoped>
.lang-switcher {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 40px;
  background-color: $color-blue;

  @media (max-width: $osx) {
    padding: 0 30px;
  }

  @media (max-width: $md) {
    padding: 0 25px;
  }

  @media (max-width: $sm) {
    padding: 0 15px;
  }
}

.lang-switcher-link {
  font-weight: 600;
  font-size: 18px;
  color: rgba($color-white, 0.5);
  text-transform: uppercase;

  @media (max-width: $osx) {
    font-size: 16px;
  }

  @media (max-width: $sm) {
    font-size: 15px;
  }

  &:hover,
  &:focus {
    color: $color-white;
  }

  &:not(:last-of-type) {
    margin-right: 10px;

    @media (max-width: $sm) {
      margin-right: 5px;
    }
  }

  &.active {
    color: $color-white;
  }
}
</style>
