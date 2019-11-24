<template>
  <nuxt-link to="/" class="product-card">
    <div class="product-card-info">
      <div class="product-card-image">
        <img :src="imageSrc" :alt="title" />
      </div>

      <h3 class="product-card-title">{{ title }}</h3>
      <p class="product-card-text">
        {{ text }}
      </p>
      <ul
        v-for="(item, index) in listItems"
        :key="index"
        class="product-card-list"
      >
        <li>{{ `- ${item}` }}</li>
      </ul>
    </div>

    <div class="product-card-button">
      <base-button collapsed>
        Посмотреть
        <svg-icon slot="icon" name="ArrowRight" />
      </base-button>
    </div>
  </nuxt-link>
</template>

<script>
import BaseButton from '@/components/baseComponents/BaseButton.vue';

export default {
  name: 'ProductCard',

  components: {
    BaseButton
  },

  props: {
    to: {
      type: String,
      default: ''
    },

    // eslint-disable-next-line vue/require-default-prop
    imageSrc: {
      type: String
    },

    title: {
      type: String,
      default: ''
    },

    text: {
      type: String,
      default: ''
    },

    listItems: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.product-card {
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin-top: 95px;
  padding: 0 30px 30px;
  background: $color-white;
  border-radius: 8px;
  box-shadow: 0 8px 20px 0 rgba(13, 28, 84, 0.25);
  transition: box-shadow 0.25s $base-easing;

  @media (max-width: $xl) {
    margin-top: 80px;
    padding: 0 20px 20px;
  }

  @media (max-width: $md) {
    margin-top: 70px;
  }

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 2px 8px 0 rgba(13, 28, 84, 0.25);

    .product-card-image {
      filter: grayscale(0);
    }
  }
}

.product-card-image {
  position: absolute;
  top: 0;
  left: 50%;
  display: inline-block;
  width: 220px;
  transform: translate(-50%, -50%);
  filter: grayscale(1);
  transition: filter 0.25s $base-easing;

  @media (max-width: $xl) {
    width: 180px;
  }

  @media (max-width: $md) {
    width: 150px;
  }
}

.product-card-info {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.product-card-title {
  margin-top: 100px;
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 20px;
  color: $color-black;
  text-transform: uppercase;

  @media (max-width: $xl) {
    font-size: 18px;
    margin-top: 90px;
    margin-bottom: 15px;
  }

  @media (max-width: $md) {
    font-size: 16px;
  }
}

.product-card-text {
  margin: 0;
  color: $color-text-primary;

  @media (max-width: $xl) {
    font-size: 15px;
  }

  @media (max-width: $md) {
    font-size: 14px;
  }
}

.product-card-list {
  @include list-reset;

  li {
    color: $color-text-primary;

    @media (max-width: $xl) {
      font-size: 15px;
    }

    @media (max-width: $md) {
      font-size: 14px;
    }
  }
}

.product-card-button {
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
}
</style>
