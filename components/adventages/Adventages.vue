<template>
  <div class="adventages">
    <img :src="bgImage" class="adventages-bg-image" alt="background image" />

    <container>
      <a-row :gutter="20">
        <a-col span="24">
          <div class="adventages-title">
            <slot name="title"></slot>
          </div>
        </a-col>
      </a-row>
    </container>

    <div class="adventages-list">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Container from '~/components/Container.vue';

import bg from '~/static/images/AdventageBg.png';

export default {
  name: 'Adventages',

  components: {
    Container
  },

  props: {
    bgImage: {
      type: String,
      default: bg
    }
  }
};
</script>

<style lang="scss" scoped>
.adventages {
  margin: 60px 0 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
  padding: 90px 0 100px;
  background-color: $color-dark-blue;
  overflow: hidden;

  @media (max-width: $sm) {
    margin: 30px 0 0;
    padding: 50px 0 60px;
  }
}

.adventages-bg-image {
  position: absolute;
  top: 0;
  left: 50%;
  width: 76%;
  transform: translateX(-50%);
}

.adventages-title {
  max-width: 440px;
  margin: 0 auto 80px;
  text-align: center;

  @media (max-width: $sm) {
    margin-bottom: 40px;
  }
}
</style>
