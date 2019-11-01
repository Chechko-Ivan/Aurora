<template>
  <button
    :class="['burger', { opened: opened }]"
    @click="$emit('toggleDrawer')"
  >
    <div class="burger-text">{{ label }}</div>

    <div class="burger-lines">
      <div class="burger-line"></div>
      <div class="burger-line"></div>
    </div>
  </button>
</template>

<script>
export default {
  name: 'Burger',

  props: {
    opened: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    label() {
      return this.opened
        ? 'Закрыть меню «о компании»'
        : 'Узнать больше о компании';
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/style/vars.scss';
$burger-bg-color: $color-primary;
$burger-bg-color-hover: $color-primary-hover;
$burger-text-color: $color-white;

.burger {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 395px;
  height: 100%;
  padding: 0 40px;
  font-family: inherit;
  background-color: $burger-bg-color;
  border: 0;
  transition: background-color 0.25s $base-easing;

  &:hover {
    background-color: $burger-bg-color-hover;
  }

  &.opened {
    .burger-lines {
      width: 18px;
    }

    .burger-line {
      &:first-of-type {
        top: 50%;
        transform: translateY(-50%) rotate(45deg);
      }

      &:last-of-type {
        bottom: 50%;
        transform: translateY(50%) rotate(-45deg);
      }
    }
  }
}

.burger-text {
  margin-right: 15px;
  font-weight: 600;
  font-size: 18px;
  color: $burger-text-color;
  text-transform: uppercase;
}

.burger-lines {
  position: relative;
  width: 45px;
  height: 14px;
}

.burger-line {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: $burger-text-color;
  transition: all 0.25s $base-easing;

  &:first-of-type {
    top: 0;
  }

  &:last-of-type {
    bottom: 0;
  }
}
</style>
