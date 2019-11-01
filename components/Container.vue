<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Container'
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1440px;
  margin: 125px auto 0;
  padding: 0 40px;
}
</style>
