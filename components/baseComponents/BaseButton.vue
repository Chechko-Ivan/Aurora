<template>
  <button
    v-on="$listeners"
    :class="['base-button', color, { collapsed: collapsed, large: large }]"
  >
    <div class="base-button-text">
      <slot></slot>
    </div>

    <slot name="icon"></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',

  props: {
    color: {
      type: String,
      default: 'primary',
      validator(val) {
        return ['primary', 'light'].includes(val);
      }
    },

    collapsed: {
      type: Boolean,
      default: false
    },

    large: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
$button-height: 50px;

.base-button {
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

  svg {
    width: 15px;
    height: 15px;
    margin-left: 15px;
    flex-shrink: 0;
  }

  &.primary {
    color: $color-white;
    background-color: $color-primary;

    &:hover {
      background-color: $color-light-orange;
      box-shadow: $button-box-shadow;
    }

    svg {
      fill: $color-white;
    }
  }

  &.light {
    svg {
      fill: $color-primary;
    }
  }

  &.collapsed {
    width: 55px;
    transition: all 0.4s ease;

    &:hover,
    &:focus {
      width: auto;

      .base-button-text {
        opacity: 1;
        visibility: visible;
        width: auto;
        height: auto;
        transition: all 0.25s ease;
        transition-delay: 0.4s;
      }

      svg {
        margin-left: 15px;
      }
    }

    .base-button-text {
      opacity: 0;
      visibility: hidden;
      width: 0;
      height: 0;
    }

    svg {
      margin-left: 0;
    }
  }

  &.large {
    padding: 0 40px;
  }
}
</style>
