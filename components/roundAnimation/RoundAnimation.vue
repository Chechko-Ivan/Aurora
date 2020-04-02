<template>
  <div class="round-animation">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'RoundAnimation'
};
</script>

<style lang="scss">
.round-animation {
  position: relative;
  box-sizing: border-box;
  border-radius: 50%;
  width: 100%;
  height: 100%;
}
</style>
