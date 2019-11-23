<template>
  <a v-if="href" :href="href" v-bind="$attrs" class="link" target="_blank">
    <slot></slot>
  </a>

  <!-- <nuxt-link v-else :to="to" v-bind="$attrs" class="n-link">
    <slot></slot>
  </nuxt-link> -->
</template>

<script>
export default {
  name: 'Link',
  inheritAttrs: false,

  props: {
    href: {
      type: String,
      default: ''
    },

    allowInsecure: {
      type: Boolean,
      default: false
    },

    to: {
      type: Object,
      default: null
    },

    name: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped></style>
