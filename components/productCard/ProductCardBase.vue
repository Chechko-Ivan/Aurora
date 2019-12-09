<template>
  <nuxt-link :to="to" class="product-card-base">
    <div class="product-card-base-inner">
      <div class="product-card-base-header">
        <h3 class="product-card-base-title">{{ title }}</h3>
        <svg-icon name="ArrowRight" />
      </div>

      <div class="product-card-base-desc">
        <p class="text-s">
          {{ text }}
        </p>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'ProductCardBase',

  props: {
    to: {
      type: String,
      default: '/products'
    },

    title: {
      type: String,
      default: ''
    },

    text: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
.product-card-base {
  display: flex;
  width: 325px;
  background-color: $color-white;
  border-radius: 8px;
  box-shadow: 0 8px 20px 0 rgba(13, 28, 84, 0.25);

  @media (max-width: $sm) {
    width: 250px;
  }
}

.product-card-base-inner {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px 30px 30px 30px;

  @media (max-width: $xl) {
    padding-top: 30px;
  }

  @media (max-width: $sm) {
    padding: 25px 20px;
  }
}

.product-card-base-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;

  svg {
    width: 16px;
    height: 16px;
    margin-left: 10px;
    fill: $color-primary;
    flex-shrink: 0;
  }
}

.product-card-base-title {
  margin: 0;
  font-weight: 600;
  font-size: 24px;
  color: #000000;

  @media (max-width: $xl) {
    font-size: 20px;
  }
}

.product-card-base-desc {
  font-size: 14px;
  line-height: $text-line-height-s;
  color: #666666;

  p {
    margin: 0;
  }
}
</style>
