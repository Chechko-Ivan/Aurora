<template>
  <div class="round-animation-item">
    <div class="round-animation-item-icon">
      <slot name="icon"></slot>
    </div>

    <div class="round-animation-item-text">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoundAnimationItem'
};
</script>

<style lang="scss" scoped>
.round-animation-item {
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  min-width: 80px;
  max-width: 80px;
  height: 80px;
  padding: 0 15px;
  background: $color-white;
  border-radius: 40px;
  box-shadow: 0 0 20px 0 rgba(161, 168, 194, 0.2);
  cursor: pointer;
  transition: all 0.25s ease;

  @media (max-width: $osx) {
    min-width: 70px;
    max-width: 70px;
    height: 70px;
  }

  @media (max-width: $xl) {
    min-width: 60px;
    max-width: 60px;
    height: 60px;
  }

  &:hover,
  &:focus {
    max-width: 360px;

    .round-animation-item-text {
      opacity: 1;
      visibility: visible;
      transition: all 0.25s ease;
      transition-delay: 0.25s;
    }
  }
}

.round-animation-item-icon {
  flex-shrink: 0;
  width: 48px;

  @media (max-width: $osx) {
    width: 37px;
  }

  @media (max-width: $xl) {
    width: 30px;
  }

  img {
    width: 100%;
    height: auto;
  }
}

.round-animation-item-text {
  max-width: 252px;
  padding-left: 30px;
  font-weight: 600;
  font-size: 20px;
  color: $color-black;
  opacity: 0;
  visibility: hidden;

  @media (max-width: $xl) {
    font-size: 17px;
    padding-left: 20px;
  }

  @media (max-width: $lg) {
    font-size: 14px;
    padding-left: 15px;
  }
}
</style>
