<template>
  <div class="round-animation-circle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'RoundAnimationCircle'
};
</script>

<style lang="scss" scoped>
.round-animation-circle {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 3px);
    height: calc(100% - 3px);
    border: 1px dashed #a1a8c2;
    border-radius: 50%;
    animation-name: rotate;
    animation-duration: 70s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
}
</style>
