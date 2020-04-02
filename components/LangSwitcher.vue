<template>
  <div :class="['lang-switcher', { 'drawer-opend': drawerOpend }]">
    <!-- <nuxt-link
      :to="`/ru${$route.fullPath}`"
      class="lang-switcher-link active"
      exact
      >{{ $t('navbar.locales.ru') }}</nuxt-link
    >
    <nuxt-link :to="`/en${$route.fullPath}`" class="lang-switcher-link" exact>{{
      $t('navbar.locales.en')
    }}</nuxt-link> -->

    <nuxt-link
      v-for="locale in availableLocales"
      :key="locale.code"
      :event="locale.code === 'en' ? '' : 'click'"
      :to="switchLocalePath(locale.code)"
      class="lang-switcher-link"
      >{{ locale.name }}</nuxt-link
    >

    <round-animation class="lang-switcher-round-animation first">
      <round-animation-circle>
        <round-animation-circle></round-animation-circle>
      </round-animation-circle>
    </round-animation>

    <round-animation class="lang-switcher-round-animation second">
      <round-animation-circle>
        <round-animation-circle></round-animation-circle>
      </round-animation-circle>
    </round-animation>
  </div>
</template>

<script>
import RoundAnimation from '~/components/roundAnimation/RoundAnimation.vue';
import RoundAnimationCircle from '~/components/roundAnimation/RoundAnimationCircle.vue';

export default {
  name: 'LangSwitcher',

  components: {
    RoundAnimation,
    RoundAnimationCircle
  },

  props: {
    drawerOpend: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    availableLocales() {
      return this.$i18n.locales;
    }
  }
};
</script>

<style lang="scss">
.lang-switcher {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 40px;
  flex-shrink: 0;
  background-color: $color-blue;
  transition: all 0.25s cubic-bezier(0.9, 0, 0.3, 0.7);
  transition-delay: 0.25s;
  overflow: hidden;

  @media (max-width: $osx) {
    padding: 0 30px;
  }

  @media (max-width: $md) {
    padding: 0 25px;
  }

  @media (max-width: $sm) {
    padding: 0 15px;
  }

  &.drawer-opend {
    height: 250vh;
    transition-delay: 0s;

    .lang-switcher-round-animation {
      &.first {
        opacity: 1;
        visibility: visible;
        transition: all 0.5s $base-easing;
        transition-delay: 0.2s;
      }

      &.second {
        opacity: 1;
        visibility: visible;
        transition: all 0.5s $base-easing;
        transition-delay: 0.4s;
      }
    }
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

  &.active,
  &.nuxt-link-exact-active {
    color: $color-white;
  }
}

.lang-switcher-round-animation {
  position: absolute !important;
  opacity: 0;
  visibility: hidden;

  &.first {
    top: 53%;
    right: 0;
    transform: translateX(50%);
    width: 128px;
    height: 128px;
    transition: all 0.25s $base-easing;
    transition-delay: 0.25s $base-easing;

    .round-animation-circle {
      padding: 28px;
    }
  }

  &.second {
    top: 67%;
    right: 30px;
    width: 330px;
    height: 330px;
    transition: all 0.25s $base-easing;
    transition-delay: 0.5s $base-easing;

    .round-animation-circle {
      padding: 45px;
    }
  }
}
</style>
