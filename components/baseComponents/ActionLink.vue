<template>
  <a
    :href="`${scheme ? `${scheme}:` : ''}${href}`"
    :target="target"
    :rel="rel"
    class="action-link"
  >
    <div class="action-link-icon">
      <slot name="icon"></slot>
    </div>
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'ActionLink',

  props: {
    href: {
      type: String,
      default: '#'
    },

    // eslint-disable-next-line vue/require-default-prop
    scheme: {
      type: String
    },

    target: {
      type: String,
      default: '_blank'
    },

    rel: {
      type: String,
      default: 'noreferrer'
    }
  }
};
</script>

<style lang="scss" scoped>
.action-link {
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 20px;
  color: $color-black;
  line-height: 1.22;
  transition: color 0.25s $base-easing;

  @media (max-width: $lg) {
    font-size: 16px;
  }

  &:hover {
    color: $color-primary;
  }
}

.action-link-icon {
  display: flex;
  margin-right: 10px;

  svg {
    width: 18px;
    height: 18px;
    fill: $color-primary;
  }
}
</style>
