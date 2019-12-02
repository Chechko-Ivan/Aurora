<template>
  <div :class="['adventages-item', { row: row }]">
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
    },

    row: {
      type: Boolean,
      default: false
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

  &.row {
    max-width: 100%;
    display: flex;
    align-items: center;
    text-align: left;

    .adventages-item-icon {
      margin: 0 35px 0 0;

      @media (max-width: $sm) {
        width: 50px;
        height: 50px;
        margin-right: 15px;

        img {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
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
  flex-shrink: 0;

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
