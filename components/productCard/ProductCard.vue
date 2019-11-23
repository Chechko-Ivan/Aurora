<template>
  <nuxt-link to="/" class="product-card">
    <div class="product-card-inner">
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

      <base-button>Посмотреть</base-button>
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
  display: block;
  min-height: 1000px;
  margin-top: 105px;
  background: $color-white;
  border-radius: 8px;
  box-shadow: 0 8px 20px 0 rgba(13, 28, 84, 0.25);
  transition: box-shadow 0.25s $base-easing;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 2px 8px 0 rgba(13, 28, 84, 0.25);

    .product-card-image {
      filter: grayscale(0);
    }
  }
}

.product-card-inner {
  position: relative;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
  box-sizing: border-box;
  padding: 110px 30px 30px 30px;
}

.product-card-image {
  position: absolute;
  top: 0;
  left: 50%;
  display: inline-block;
  width: 240px;
  transform: translate(-50%, -50%);
  filter: grayscale(1);
  transition: filter 0.25s $base-easing;
}

.product-card-title {
  margin: 0;
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 20px;
  color: $color-black;
  text-transform: uppercase;
}

.product-card-text {
  margin: 0;
  color: $color-text-primary;
}

.product-card-list {
  @include list-reset;

  li {
    color: $color-text-primary;
  }
}
</style>
