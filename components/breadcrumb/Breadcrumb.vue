<template>
  <ul class="breadcrumb">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'Breadcrumb'
};
</script>

<style lang="scss" scoped>
.breadcrumb {
  @include list-reset;
  position: fixed;
  top: 135px;
  left: 40px;
  display: flex;
  align-items: center;
  z-index: 9;

  @media (max-width: $osx) {
    top: 115px;
    left: 30px;
  }

  @media (max-width: $md) {
    top: 90px;
    left: 20px;
  }

  @media (max-width: $sm) {
    top: 80px;
    left: 15px;
    width: 100%;
    flex-wrap: wrap;
  }
}
</style>
