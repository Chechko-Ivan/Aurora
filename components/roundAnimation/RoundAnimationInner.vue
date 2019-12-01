<template>
  <div class="round-animation-inner">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'RoundAnimationInner'
};
</script>

<style lang="scss" scoped>
.round-animation-inner {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 50%;
  background-color: transparent;
}
</style>
