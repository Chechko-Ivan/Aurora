<template>
  <div class="adventages-item">
    <div class="adventages-item-icon">
      <img :src="iconSrc" alt="Icon" />
    </div>

    <div class="adventages-item-text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdventagesItem',

  props: {
    // eslint-disable-next-line vue/require-default-prop
    iconSrc: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.adventages-item {
  width: 100%;
  max-width: 260px;
  margin: 0 auto;
  color: $color-white;
}

.adventages-item-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: #ffffff;
  border-radius: 50%;
  box-shadow: 0 0 20px 0 rgba(161, 168, 194, 0.2);
  margin: 0 auto 15px;

  img {
    width: 45px;
    height: 45px;
  }
}

.adventages-item-text {
  font-weight: 6;
  font-size: 20px;
}
</style>
