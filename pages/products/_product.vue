<template>
  <div class="page page-products-inner">
    <section class="s-product-detail">
      <container>
        <a-row :gutter="20">
          <a-col :lg="{ span: 10 }" class="page-products-inner-preview">
            <div>
              <div class="page-products-inner-preview-slider">
                <div v-swiper:mySwiper="swiperOption">
                  <!-- <div class="swiper-pagination swiper-pagination-bullets"></div> -->
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
            </div>
          </a-col>
          <a-col :lg="{ span: 12 }">
            <div class="page-products-inner-description">
              <h1 class="title-h1">{{ data.title }}</h1>

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

    <section class="s-form">
      <container>
        <a-row :gutter="{ md: 20 }">
          <a-col>
            <application-form accent>
              <h2 slot="title">Напишите нам</h2>

              <application-form-row>
                <application-form-field
                  placeholder="Представьтесь"
                ></application-form-field>
              </application-form-row>

              <application-form-row>
                <application-form-field
                  type="tel"
                  placeholder="Контактный телефон"
                ></application-form-field>

                <application-form-field
                  type="email"
                  placeholder="Контактный e-mail"
                ></application-form-field>
              </application-form-row>

              <application-form-row>
                <application-form-textarea
                  placeholder="Сообщение"
                ></application-form-textarea>
              </application-form-row>

              <div class="button-wrapper">
                <base-button color="light" large>
                  Отправить
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
import Container from '@/components/Container.vue';
import BaseButton from '@/components/baseComponents/BaseButton.vue';
import ApplicationForm from '@/components/form/ApplicationForm.vue';
import ApplicationFormRow from '@/components/form/ApplicationFormRow.vue';
import ApplicationFormField from '@/components/form/ApplicationFormField.vue';
import ApplicationFormTextarea from '@/components/form/ApplicationFormTextarea.vue';

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
        spaceBetween: 20
      }
    };
  },

  computed: {
    data() {
      return this.$t('products').find(
        (product) => product.link === this.$route.params.product
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.page-products-inner {
  padding: 10px;

  .s-form {
    margin-top: 40px;

    .button-wrapper {
      margin-top: 40px;
    }
  }
}

.page-products-inner-preview {
  // max-width: 650px;
  // width: 100%;
  position: sticky;
  top: 255px;
  // left: 70px;
  // z-index: 2;

  img {
    width: 100%;
  }
}

.page-products-inner-description {
  margin-top: 70px;
  padding-bottom: 25px;
  border-bottom: 1px solid #a1a8c2;
}

.page-products-inner-adventages-list {
  margin: 40px 0;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding: 30px 0 15px 30px;
  list-style: none;
  border: 6px solid $color-primary;
  border-radius: 21px;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    width: 6px;
    height: 45%;
    background-color: $body-bg;
    transform: translate(100%, -50%);
  }

  li {
    flex-basis: calc(50% - 20px);
    margin-bottom: 15px;

    span {
      display: block;
      max-width: 230px;
    }
  }
}

.page-products-inner-applying-list {
  margin-top: 30px;
  margin-bottom: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;

  li {
    flex-basis: calc(50% - 20px);
    margin-bottom: 20px;

    span {
      display: block;
      max-width: 320px;
    }
  }
}
</style>
