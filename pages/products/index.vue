<template>
  <div class="page page-products">
    <header class="page-products-header">
      <container>
        <a-row :gutter="20">
          <a-col :span="24">
            <h1 class="title-h1" data-aos="fade" data-aos-delay="200">
              Продукция Аврорапласт
            </h1>
          </a-col>
        </a-row>
      </container>
    </header>

    <section class="s-products">
      <container>
        <a-row :gutter="20">
          <a-col
            v-for="(product, index) in $t('products')"
            :key="index"
            :lg="{ span: 8 }"
            :sm="{ span: 12 }"
            class="s-products-col"
          >
            <product-card
              :to="
                localePath({
                  path: `/products/${product.link}`
                })
              "
              :title="product.title"
              :image-src="`images/contentImage/${product.summary.summaryImage}`"
              :text="product.summary.summaryText"
              :list-items="product.summary.summaryList"
              :data-aos-delay="
                index === 0 || index === 3
                  ? 200
                  : index === 1 || index === 4
                  ? 300
                  : index === 2 || index === 5
                  ? 400
                  : 200
              "
              data-aos="fade"
            ></product-card>
          </a-col>
        </a-row>
      </container>
    </section>

    <section
      :style="{
        backgroundImage: `url(${
          this.$i18n.locale === 'ru' ? PartnerProgramBg : PartnerProgramBgEn
        })`
      }"
      class="s-partner-program"
    >
      <!-- <img
        :src="
          this.$i18n.locale === 'ru' ? PartnerProgramBg : PartnerProgramBgEn
        "
        class="s-partner-program-bg-image"
        alt="alt"
        data-aos="fade"
        data-aos-delay="300"
      /> -->
      <container>
        <a-row :gutter="{ md: 20 }">
          <a-col :xl="{ offset: 2, span: 22 }">
            <img
              class="s-partner-program-icon"
              src="~/static/images/Network.svg"
              alt="Network Icon"
              width="55px"
              data-aos="fade"
            />
            <h2 class="s-partner-program-title title-h2" data-aos="fade">
              Партнерская программа
            </h2>
            <div class="s-partner-program-text" data-aos="fade">
              <p class="text-xxl">
                Мы заинтересованы в территориальном расширении нашей сети и
                увеличения круга наших покупателей.
              </p>
              <p class="text-xxl">
                Приглашаем к сотрудничеству дилеров по регионам в странах
                Российской Федерации, Украины и стран ЕС.
              </p>
            </div>

            <div class="link-wrapper">
              <base-nuxt-link :to="localePath('contacts')">
                Отправить заявку
                <svg-icon slot="icon" name="ArrowRight" />
              </base-nuxt-link>
            </div>
          </a-col>
        </a-row>
      </container>
    </section>
  </div>
</template>

<script>
import Container from '~/components/Container.vue';
import ProductCard from '~/components/productCard/ProductCard.vue';
import BaseNuxtLink from '~/components/baseComponents/BaseNuxtLink.vue';

import PartnerProgramBg from '~/static/images/PartnerProgramBg.png';
import PartnerProgramBgEn from '~/static/images/PartnerProgramBgEn.png';

export default {
  components: {
    Container,
    ProductCard,
    BaseNuxtLink
  },

  data() {
    return {
      PartnerProgramBg,
      PartnerProgramBgEn
    };
  },

  mounted() {
    this.productCardNodeList = document.querySelectorAll('.product-card');
    this.calculateProductCardHeight();

    this.$nextTick().then(() => {
      window.addEventListener('resize', this.resizeHandler);
    });
  },

  methods: {
    resizeHandler() {
      this.calculateProductCardHeight();
    },

    calculateProductCardHeight() {
      let maxHeight = 0;

      for (const node of this.productCardNodeList) {
        const nodeHeight = node.clientHeight;

        if (nodeHeight > maxHeight) {
          maxHeight = nodeHeight;

          for (const node of this.productCardNodeList) {
            node.style.height = `${nodeHeight}px`;
          }
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.page-products-header {
  margin-bottom: 60px;
}

.s-products {
  margin-bottom: 90px;

  @media (max-width: $sm) {
    margin-bottom: 45px;
  }
}

.s-products-col {
  &:nth-child(n + 4) {
    margin-top: 50px;

    @media (max-width: $xl) {
      margin-top: 40px;
    }
  }

  @media (max-width: $lg) {
    &:nth-child(n + 3) {
      margin-top: 40px;
    }
  }

  @media (max-width: $sm) {
    &:not(:first-of-type) {
      margin-top: 120px;
    }
  }
}
</style>
