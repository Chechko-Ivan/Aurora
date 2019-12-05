<template>
  <div class="page page-products-inner">
    <section class="s-product-detail">
      <container>
        <a-row :gutter="20">
          <a-col
            :lg="{ span: 10 }"
            :md="{ span: 8 }"
            :class="[
              'page-products-inner-preview',
              { collapse: collapseSlider }
            ]"
          >
            <div
              class="unidentified-div"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <div class="page-products-inner-preview-slider">
                <div v-swiper:mySwiper="swiperOption">
                  <div class="swiper-wrapper">
                    <div
                      v-for="(image, index) in data.detail.images"
                      :key="index"
                      class="swiper-slide"
                    >
                      <img
                        :src="`../images/contentImage/${image}`"
                        alt="data.title"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-pagination swiper-pagination-bullets"></div>
            </div>

            <ul class="page-products-inner-characteristics">
              <li
                v-for="(characteristic, index) in data.detail.characteristics"
                :key="index"
              >
                {{ characteristic }}
              </li>
            </ul>
          </a-col>

          <a-col
            :xl="{ span: 12 }"
            :lg="{ span: 14 }"
            :md="{ span: 16 }"
            data-aos="fade"
            data-aos-delay="400"
          >
            <div class="page-products-inner-description">
              <h1 class="title-h1">
                {{ data.title }}
              </h1>

              <p
                v-for="(text, index) in data.detail.description"
                :key="index"
                class="text-xxxl text-black"
              >
                {{ text }}
              </p>

              <ul class="page-products-inner-adventages-list list-style-dots">
                <li
                  v-for="(adventage, index) in data.detail.advantages"
                  :key="index"
                  class="text-xl"
                >
                  <span>
                    {{ adventage }}
                  </span>
                </li>
              </ul>

              <h2 class="title-h2">{{ data.detail.applying.title }}</h2>

              <ul class="page-products-inner-applying-list list-style-dots">
                <li
                  v-for="(item, index) in data.detail.applying.items"
                  :key="index"
                  class="text-xl"
                >
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
          </a-col>
        </a-row>
      </container>
    </section>

    <section v-if="data.detail.product_types" class="s-types-products">
      <img
        class="s-types-products-bg-image"
        src="~/static/images/DashedCircle2.png"
        alt="Dashed Circle"
      />
      <container>
        <a-row :gutter="20">
          <a-col :span="24">
            <h2 class="s-types-products-title">
              {{ data.detail.product_types.title }}
            </h2>
          </a-col>
          <a-col :xl="{ offset: 4, span: 16 }" class="s-types-products-content">
            <ul
              v-for="(list, index1) in data.detail.product_types.items"
              :key="index1"
              class="s-types-products-list"
            >
              <li v-for="(item, index2) in list" :key="index2">
                {{ item }}
              </li>
            </ul>
          </a-col>
        </a-row>
      </container>
    </section>

    <section class="s-form">
      <container>
        <a-row :gutter="{ md: 20 }">
          <a-col>
            <application-form accent data-aos="zoom-out" data-aos-delay="200">
              <h2 slot="title">Напишите нам</h2>

              <application-form-row>
                <application-form-field
                  placeholder="Представьтесь*"
                ></application-form-field>
              </application-form-row>

              <application-form-row>
                <application-form-field
                  type="tel"
                  placeholder="Контактный телефон*"
                ></application-form-field>

                <application-form-field
                  type="email"
                  placeholder="Контактный e-mail"
                ></application-form-field>
              </application-form-row>

              <application-form-row>
                <application-form-textarea
                  placeholder="Сообщение*"
                ></application-form-textarea>
              </application-form-row>

              <div class="button-wrapper">
                <base-button color="light" large>
                  {{ $t('form.submit') }}
                  <svg-icon slot="icon" name="ArrowRight" />
                </base-button>
              </div>
            </application-form>
          </a-col>
        </a-row>
      </container>
    </section>
  </div>
</template>

<script>
import Container from '~/components/Container.vue';
import BaseButton from '~/components/baseComponents/BaseButton.vue';
import ApplicationForm from '~/components/form/ApplicationForm.vue';
import ApplicationFormRow from '~/components/form/ApplicationFormRow.vue';
import ApplicationFormField from '~/components/form/ApplicationFormField.vue';
import ApplicationFormTextarea from '~/components/form/ApplicationFormTextarea.vue';

export default {
  components: {
    Container,
    BaseButton,
    ApplicationForm,
    ApplicationFormRow,
    ApplicationFormField,
    ApplicationFormTextarea
  },

  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
          delay: 2000
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      collapseSlider: false
    };
  },

  computed: {
    data() {
      return this.$t('products').find(
        (product) => product.link === this.$route.params.product
      );
    }
  },

  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },

  methods: {
    onScroll() {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 200) {
        this.collapseSlider = true;
      } else {
        this.collapseSlider = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.page-products-inner {
  // padding: 10px;

  .s-form {
    margin-top: 40px;

    .button-wrapper {
      margin-top: 40px;
    }
  }
}

.page-products-inner-preview {
  position: sticky;
  top: 255px;

  @media (max-width: $md) {
    position: relative;
    top: 0;
  }

  @media (max-width: $sm) {
    margin-top: 40px;
  }

  &.collapse {
    @media (min-width: $md) {
      .page-products-inner-preview-slider {
        width: 340px;
        height: 340px;
        background-color: $color-white;
        transition: all 0.25s $base-easing;

        @media (max-width: $lg) {
          width: 230px;
          height: 230px;
        }
      }

      .swiper-container {
        border-radius: 50%;
        transition: all 0.25s $base-easing;
      }

      .swiper-pagination-bullets {
        visibility: visible;
        opacity: 1;
      }

      img {
        width: 300px;
        transition: all 0.25s $base-easing;

        @media (max-width: $lg) {
          width: 200px;
        }
      }
    }
  }

  .page-products-inner-preview-slider {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-radius: 50%;
  }

  .swiper-container {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 100%;
  }

  .swiper-pagination-bullets {
    bottom: 0;
    left: 50%;
    width: 340px;
    transform: translate(-50%);
    visibility: hidden;
    opacity: 0;

    @media (max-width: $lg) {
      width: 230px;
    }

    @media (max-width: $md) {
      width: 100%;
      visibility: visible;
      opacity: 1;
    }
  }

  .unidentified-div {
    position: relative;
    padding-bottom: 40px;
  }
}

.page-products-inner-description {
  margin-top: 70px;
  padding-bottom: 25px;
  border-bottom: 1px solid #a1a8c2;

  @media (max-width: $sm) {
    margin-top: 40px;
  }
}

.page-products-inner-adventages-list {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 40px 0;
  padding: 30px 0 15px 30px;
  list-style: none;
  border: 6px solid $color-primary;
  border-radius: 21px;

  @media (max-width: $sm) {
    flex-direction: column;
    padding-right: 15px;
    padding-left: 15px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 1px;
    width: 8px;
    height: 45%;
    background-color: $body-bg;
    transform: translate(100%, -50%);
  }

  li {
    flex-basis: calc(50% - 20px);
    margin-bottom: 15px;

    @media (max-width: $sm) {
      flex-basis: 100%;
    }

    span {
      display: block;
      max-width: 230px;
    }
  }
}

.page-products-inner-applying-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  margin-bottom: 0;
  padding: 0;

  @media (max-width: $sm) {
    flex-direction: column;
  }

  li {
    flex-basis: calc(50% - 20px);
    margin-bottom: 20px;

    @media (max-width: $sm) {
      flex-basis: 100%;
    }

    span {
      display: block;
      max-width: 320px;
    }
  }
}

.page-products-inner-characteristics {
  @include list-reset;
  max-width: 345px;
  margin: 10px auto 0;

  li {
    font-weight: 600;
    color: $color-black;

    @media (max-width: $sm) {
      font-size: 14px;
    }
  }
}

.s-types-products {
  position: relative;
  margin-top: 80px;
  overflow: hidden;
  background-color: $color-dark-blue;
}

.s-types-products-bg-image {
  position: absolute;
  width: 79%;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: $sm) {
    width: 100%;
  }
}

.s-types-products-title {
  margin-top: 60px;
  text-align: center;
  color: $color-white;
}

.s-types-products-content {
  display: flex;
  justify-content: space-between;
  padding: 35px 0 70px;

  @media (max-width: $md) {
    flex-wrap: wrap;
  }
}

.s-types-products-list {
  @include list-reset;
  padding: 0 15px;

  @media (max-width: $md) {
    flex-basis: calc(50% - 30px);
    text-align: center;

    &:nth-child(-n + 2) {
      margin-bottom: 30px;
    }
  }

  li {
    font-size: 24px;
    line-height: 1.87;
    color: $color-white;

    @media (max-width: $sm) {
      font-size: 20px;
    }
  }
}
</style>
