<template>
  <a v-if="href" :href="href" class="link" target="_blank" v-bind="$attrs">
    <slot></slot>
  </a>

  <nuxt-link v-else class="n-link" :to="to" v-bind="$attrs">
    <slot></slot>
  </nuxt-link>
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

<style lang="scss" scoped>
.link {
}
</style>
