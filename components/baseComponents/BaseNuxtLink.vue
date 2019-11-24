<template>
  <nuxt-link :to="to" v-bind="$attrs" :class="['base-nuxt-link', color]">
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
  text-transform: uppercase;
  border: 0;
  font-family: inherit;
  border-radius: 4px;
  transition: all 0.25s $base-easing;

  &.primary {
    color: $color-white;
    background-color: $color-primary;

    &:hover {
      background-color: $color-light-orange;
      box-shadow: $button-box-shadow;
    }
  }

  svg {
    width: 15px;
    height: 15px;
    margin-left: 15px;
    flex-shrink: 0;
    fill: $color-white;
  }
}
</style>
