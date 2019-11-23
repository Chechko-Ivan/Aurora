<template>
  <button class="base-button" v-on="$listeners">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton'
};
</script>

<style lang="scss" scoped>
$button-height: 50px;

.base-button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: $button-height;
  margin: 0;
  padding: 0 20px;
  border: 0;
  border-radius: 4px;
  background: green;
}
</style>
