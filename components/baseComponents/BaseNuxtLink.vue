<template>
  <nuxt-link :to="to" v-bind="$attrs" :class="['base-nuxt-link', color]">
    <div class="icon-before">
      <slot name="icon-before"></slot>
    </div>
    <div class="base-nuxt-link-text">
      <slot></slot>
    </div>
    <slot name="icon"></slot>
  </nuxt-link>
</template>

<script>
export default {
  name: 'BaseNuxtLink',

  props: {
    to: {
      type: String,
      default: '/'
    },

    color: {
      type: String,
      default: 'primary',
      validator(val) {
        return ['primary', 'light'].includes(val);
      }
    }
  }
};
</script>

<style lang="scss">
$button-height: 50px;

.base-nuxt-link {
  display: flex;
  justify-content: center;
  align-items: center;
  height: $button-height;
  margin: 0;
  padding: 0 20px;
  font-weight: 600;
  font-size: 14px;
  font-family: inherit;
  text-transform: uppercase;
  border: 0;
  border-radius: 4px;
  transition: all 0.25s $base-easing;

  @media (max-width: $sm) {
    font-size: 12px;
  }

  &:not(:last-of-type) {
    margin-right: 10px;

    @media (max-width: $sm) {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }

  &.primary {
    color: $color-white;
    background-color: $color-primary;

    &:hover {
      background-color: $color-light-orange;
      box-shadow: $button-box-shadow;
    }
  }

  .icon {
    flex-shrink: 0;
    width: 15px;
    height: 15px;
    margin-left: 15px;
    fill: $color-white;
  }

  .icon-before {
    flex-shrink: 0;

    svg {
      width: 24px;
      height: auto;
      margin-right: 15px;
      margin-left: 0;
    }
  }
}
</style>
