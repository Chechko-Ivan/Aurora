<template>
  <button class="button" v-on="$listeners">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button'
};
</script>

<style lang="scss" scoped>
.button {
}
</style>
