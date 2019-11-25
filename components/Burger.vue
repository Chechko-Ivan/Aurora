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
        ? this.$t('navbar.burger.open_text')
        : this.$t('navbar.burger.close_text');
    }
  }
};
</script>

<style lang="scss" scoped>
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
  transition: all 0.3s cubic-bezier(0.9, 0, 0.3, 0.7);

  @media (max-width: $osx) {
    max-width: 345px;
    padding: 0 30px;
  }

  @media (max-width: $xl) {
    justify-content: center;
    width: 100px;
    max-width: none;
  }

  @media (max-width: $md) {
    width: 90px;
    padding: 0 25px;
  }

  @media (max-width: $sm) {
    width: 70px;
    padding: 0 15px;
  }

  // &:hover {
  //   background-color: $burger-bg-color-hover;

  //   @media (max-width: $xl) {
  //     background-color: $burger-bg-color;
  //   }
  // }

  &.opened {
    @media (max-width: $xl) {
      width: 395px;
    }

    @media (max-width: $md) {
      width: calc(100% - 115.88px);
    }

    @media (max-width: $sm) {
      width: calc(100% - 87.39px);
    }

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

    .burger-text {
      @media (max-width: $xl) {
        opacity: 1;
        visibility: visible;
        font-size: 18px;
        margin-right: 15px;
        transition-delay: 0.3s;
        transition-duration: 0.25s $base-easing;
      }

      @media (max-width: $sm) {
        font-size: 10px;
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

  @media (max-width: $osx) {
    font-size: 16px;
  }

  @media (max-width: $xl) {
    opacity: 0;
    visibility: hidden;
    font-size: 0;
    margin-right: 0;
  }
}

.burger-lines {
  position: relative;
  width: 45px;
  height: 14px;

  @media (max-width: $osx) {
    width: 40px;
  }
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
