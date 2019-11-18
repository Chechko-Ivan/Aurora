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
  margin: 0 auto;
  padding: 0 40px;

  @media (max-width: $lg) {
    padding: 0 30px;
  }

  @media (max-width: $md) {
    padding: 0 25px;
  }

  @media (max-width: $sm) {
    padding: 0 15px;
  }
}
</style>
