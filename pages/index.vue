<template>
  <div class="page page-home">
    <header class="page-home-header">
      <container>
        <a-row :gutter="{ md: 20 }" type="flex" align="middle">
          <a-col
            :xl="{ offset: 2, span: 14 }"
            :lg="{ span: 18 }"
            :md="{ span: 15 }"
          >
            <span class="title-top" data-aos="fade" data-aos-delay="800">
              с 2003 года
            </span>
            <h1 class="title-h1" data-aos="zoom-out" data-aos-delay="200">
              Производим качественные изделия из ПВХ
            </h1>
          </a-col>

          <a-col
            :lg="{ span: 6 }"
            :md="{ span: 9 }"
            data-aos="fade"
            data-aos-delay="400"
          >
            <p class="text-xxl my-0">
              Специалисты Аврорапласт постоянно работают над обновлением и
              расширением ассортимента, повышением качества производимых изделий
            </p>
          </a-col>
        </a-row>
      </container>

      <div
        class="video-line"
        data-aos="slide-right"
        data-aos-delay="1300"
        data-aos-duration="1300"
      >
        <div class="video-line-inner" data-aos="fade" data-aos-delay="2500">
          <a href="/" class="video-line-button">
            Смотреть
            <svg-icon name="Play" />Видео
          </a>
        </div>
      </div>
    </header>

    <section class="product-type-animation-wrapper overflow-hidden">
      <container>
        <a-row :gutter="20" type="flex" align="bottom">
          <a-col span="24">
            <round-animation
              class="product-type-animation"
              data-aos="fade"
              data-aos-delay="1100"
            >
              <round-animation-circle>
                <!-- Gear -->
                <round-animation-item class="first">
                  <img
                    slot="icon"
                    src="~/static/images/Gear.svg"
                    alt="Gear Icon"
                  />
                  <template slot="text">
                    Собственные производственные площади
                  </template>
                </round-animation-item>
                <round-animation-circle>
                  <!-- Medal -->
                  <round-animation-item class="second">
                    <img
                      slot="icon"
                      src="~/static/images/Medal.svg"
                      alt="Medal Icon"
                    />
                    <template slot="text">
                      Работаем по индивидуальным заказам любых объемов и
                      сложности
                    </template>
                  </round-animation-item>
                  <round-animation-circle>
                    <!-- Honeycombs -->
                    <round-animation-item class="third">
                      <img
                        slot="icon"
                        src="~/static/images/Honeycombs.svg"
                        alt="Honeycombs Icon"
                      />
                      <template slot="text">
                        Оперативно выполняем все заказы клиента
                      </template>
                    </round-animation-item>
                    <round-animation-inner
                      style="backgroundImage: url(images/designPicture/designPicture2.jpg)"
                    >
                      <!-- <img
                        src="~/static/images/designPicture/designPicture2.jpg"
                        alt="Windowsill"
                        data-aos="zoom-out"
                        data-aos-duration="1500"
                        data-aos-delay="1150"
                      /> -->
                    </round-animation-inner>
                  </round-animation-circle>
                </round-animation-circle>
              </round-animation-circle>
            </round-animation>
          </a-col>
        </a-row>
      </container>

      <div class="product-type-swiper" data-aos="fade" data-aos-delay="1300">
        <div v-swiper:mySwiper="productSwiperOption">
          <div class="swiper-pagination swiper-pagination-bullets"></div>
          <div class="swiper-wrapper">
            <div
              v-for="(product, index) in $t('products')"
              :key="index"
              class="swiper-slide"
            >
              <product-card-base
                :title="product.title"
                :to="
                  localePath({
                    path: `/products/${product.link}`
                  })
                "
                :text="product.summary.summaryText"
              ></product-card-base>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="s-page-home-about">
      <container>
        <a-row :gutter="20">
          <a-col :xl="{ offset: 2, span: 20 }" class="s-page-home-about-col">
            <button class="swiper-arrow swiper-arrow-prev">
              <svg-icon name="ArrowLeft" />
            </button>
            <button class="swiper-arrow swiper-arrow-next">
              <svg-icon name="ArrowRight" />
            </button>

            <div v-swiper:mySswiper="aboutSwiperOption">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="s-page-home-about-slide">
                    <h2>
                      Собственные производственные площади
                    </h2>
                    <p class="text-xxl">
                      Производственные мощности компании позволяют изготавливать
                      лист ПВХ, сэндвич панели ПВХ, подоконную доску,
                      подставочный профиль, термовставки ПВХ, профили для
                      отделки оконных и дверных проемов в широком ассортименте.
                    </p>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="s-page-home-about-slide">
                    <h2>
                      Собственные производственные площади
                    </h2>
                    <p class="text-xxl">
                      Производственные мощности компании позволяют изготавливать
                      лист ПВХ, сэндвич панели ПВХ, подоконную доску,
                      подставочный профиль, термовставки ПВХ, профили для
                      отделки оконных и дверных проемов в широком ассортименте.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a-col>
        </a-row>
      </container>
    </section>

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

    <section
      class="s-advantages s-advantages-text"
      data-aos="fade"
      data-aos-delay="200"
    >
      <container>
        <a-row :gutter="{ md: 20 }">
          <a-col :xl="{ offset: 2, span: 22 }">
            <div class="s-title">
              <h2 data-aos="fade">Поставщикам</h2>
            </div>

            <a-tabs
              :tabPosition="windowWidth > 575 ? 'left' : 'top'"
              v-model="activeAdvanatagePaneKey"
            >
              <a-tab-pane
                v-for="(advantage, index) in $t('p_home_advantages')"
                :key="index"
                :tab="advantage.title"
              >
                <h2>{{ advantage.title }}</h2>
                <p class="text-xxxl text-black">
                  Чтобы обеспечить бесперебойную работу нашего предприятия, мы
                  заинтересованы в сотрудничестве с поставщиками качественных
                  товаров.
                </p>
                <p class="text-xxl">
                  На постоянной основе ведём закупку: защитной пленки для
                  сэндвич панелей и подоконника, ламинационной пленки для
                  подоконника, ПВХ-С, добавки для переработки ПВХ в широком
                  ассортименте,микрокальциты,однослойный полиуретанновый клей
                  для сэндвич панелей, рециклат.
                </p>

                <div class="link-wrapper">
                  <base-nuxt-link :to="localePath('contacts')">
                    Прислать коммерческое предложение
                    <svg-icon slot="icon" name="ArrowRight" />
                  </base-nuxt-link>
                </div>
              </a-tab-pane>
            </a-tabs>
          </a-col>
        </a-row>
      </container>
    </section>

    <section class="s-form">
      <container>
        <a-row :gutter="{ md: 20 }">
          <a-col>
            <div class="s-title center">
              <h2 data-aos="fade">Остались вопросы?</h2>
              <span
                class="s-title-sub text-xxl"
                data-aos="fade"
                data-aos-delay="250"
              >
                Оставьте свой номер телефона и мы свяжемся с вами
              </span>
            </div>

            <application-form small data-aos="zoom-out" data-aos-delay="200">
              <application-form-row>
                <application-form-field
                  :error="phone.error"
                  :value="phone.value"
                  @update="(e) => (phone.value = e)"
                  type="tel"
                  placeholder="Введите номер телефона"
                >
                  <base-button
                    slot="root"
                    @click.prevent="sendForm"
                    type="submit"
                    collapsed
                  >
                    {{ $t('form.submit') }}
                    <svg-icon slot="icon" name="ArrowRight" />
                  </base-button>
                </application-form-field>
              </application-form-row>
            </application-form>
          </a-col>
        </a-row>
      </container>
    </section>
  </div>
</template>

<script>
import Container from '~/components/Container.vue';
import RoundAnimation from '~/components/roundAnimation/RoundAnimation.vue';
import RoundAnimationCircle from '~/components/roundAnimation/RoundAnimationCircle.vue';
import RoundAnimationInner from '~/components/roundAnimation/RoundAnimationInner.vue';
import RoundAnimationItem from '~/components/roundAnimation/RoundAnimationItem.vue';
import ProductCardBase from '~/components/ProductCard/ProductCardBase.vue';
import ProductCard from '~/components/productCard/ProductCard.vue';
import BaseButton from '~/components/baseComponents/BaseButton.vue';
import BaseNuxtLink from '~/components/baseComponents/BaseNuxtLink.vue';
import ApplicationForm from '~/components/form/ApplicationForm.vue';
import ApplicationFormRow from '~/components/form/ApplicationFormRow.vue';
import ApplicationFormField from '~/components/form/ApplicationFormField.vue';

import PartnerProgramBg from '~/static/images/PartnerProgramBg.png';
import PartnerProgramBgEn from '~/static/images/PartnerProgramBgEn.png';

export default {
  components: {
    Container,
    RoundAnimation,
    RoundAnimationCircle,
    RoundAnimationInner,
    RoundAnimationItem,
    ProductCardBase,
    ProductCard,
    BaseButton,
    BaseNuxtLink,
    ApplicationForm,
    ApplicationFormRow,
    ApplicationFormField
  },

  data() {
    return {
      productSwiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          768: {
            slidesPerView: 'auto'
          }
        }
      },
      aboutSwiperOption: {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          prevEl: '.swiper-arrow-prev',
          nextEl: '.swiper-arrow-next'
        }
      },
      windowWidth: null,
      activeAdvanatagePaneKey: 0,
      productCardNodeList: null,
      PartnerProgramBg,
      PartnerProgramBgEn,
      phone: { value: '', error: false }
    };
  },

  mounted() {
    this.windowWidth = window.innerWidth;

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
    },

    sendForm() {
      const { phone } = this;

      if (!phone.value) {
        this.phone.error = true;
        this.$notification.open({
          class: 'custome-ant-notification',
          message: 'АВРОРАПЛАСТ',
          duration: 7,
          description:
            'Проверьте правильность введенных данных и попробуйте еще раз.'
        });
        return;
      }

      this.phone.error = false;

      const body = new FormData();
      body.append('phone', phone.value);

      const options = {
        method: 'POST',
        body
      };

      fetch('./mail.php', options)
        .then((data) => {
          return data.json();
        })
        .then((res) => {
          if (res.success) {
            this.$notification.open({
              class: 'custome-ant-notification',
              message: 'АВРОРАПЛАСТ',
              duration: 7,
              description: res.success
            });

            this.phone.value = '';
          } else {
            this.$notification.open({
              class: 'custome-ant-notification',
              message: 'АВРОРАПЛАСТ',
              duration: 7,
              description: res.error
            });
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
// VIDEO LINE
.video-line {
  width: 100%;
  height: 1px;
  margin-top: 25px;
  background-color: #a1a8c2;

  @media (max-width: $xl) {
    margin-top: 35px;
  }
}

.video-line-inner {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  padding: 0 10px;
}

.video-line-button {
  position: absolute;
  top: 50%;
  right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  font-weight: 600;
  text-align: center;
  color: #000000;
  background-color: transparent;
  border: 0;
  transform: translateY(-50%);

  @media (max-width: $md) {
    font-size: 12px;
  }

  &:hover {
    color: $color-primary;

    svg {
      fill: $color-primary;
    }
  }

  svg {
    width: 16.5px;
    height: 21px;
    margin: 10px 0;

    @media (max-width: $md) {
      width: 14.5px;
      height: 19px;
      margin: 5px 0;
    }
  }
}

// PRODUCT TYPE
.product-type-animation-wrapper {
  position: relative;
  z-index: 0;
  margin-top: -150px;

  @media (max-width: $osx) {
    margin-top: -80px;
  }

  @media (max-width: $xl) {
    margin-top: 35px;
  }
}

.product-type-animation {
  width: 790px;
  height: 790px;

  @media (max-width: $osx) {
    width: 600px;
    height: 600px;
  }

  @media (max-width: $xl) {
    width: 450px;
    height: 450px;
  }

  @media (max-width: $lg) {
    width: 270px;
    height: 270px;
  }

  @media (max-width: $md) {
    display: none;
  }

  .round-animation-circle {
    padding: 60px;

    @media (max-width: $xl) {
      padding: 45px;
    }

    @media (max-width: $lg) {
      padding: 20px;
    }
  }

  .round-animation-inner {
    background-color: $color-white;
  }
}

.round-animation-item.first {
  top: 22%;
  left: 0;

  @media (max-width: $lg) {
    top: 10%;
    left: 3%;
  }
}

.round-animation-item.second {
  top: 27%;
  right: -3%;
  flex-direction: row-reverse;

  @media (max-width: $osx) {
    right: -5%;
  }

  @media (max-width: $lg) {
    top: calc(50% - 30px);
    right: -10%;
  }
}

.round-animation-item.third {
  bottom: 17%;
  left: 0;

  @media (max-width: $osx) {
    left: -4%;
  }

  @media (max-width: $lg) {
    bottom: -10%;
  }
}

.product-type-swiper {
  position: absolute;
  right: 0;
  bottom: 140px;
  // width: 500px;
  width: 40%;
  padding: 30px 20px;
  overflow: hidden;
  box-sizing: border-box;

  @media (max-width: $osx) {
    bottom: 80px;
  }

  @media (max-width: $xl) {
    width: 400px;
    bottom: 20px;
  }

  @media (max-width: $md) {
    position: static;
    width: auto;
  }

  .swiper-container {
    overflow: visible;
  }

  .swiper-slide {
    width: auto;

    @media (max-width: $md) {
      width: 325px;
    }

    @media (max-width: $sm) {
      width: 250px;
    }
  }

  .swiper-pagination.swiper-pagination-bullets {
    top: -26px;
    bottom: auto;
    left: 0;
    width: auto;
    transform: none;
  }
}

// RESPONSIVE PAGE
.page-home-header {
  position: relative;
  z-index: 1;

  .title-h1 {
    @media (max-width: $sm) {
      margin-bottom: 20px;
    }
  }
}

.s-products {
  margin: 90px 0;

  @media (max-width: $sm) {
    margin: 45px 0;
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

.s-page-home-about {
  margin-top: 180px;
  margin-bottom: 90px;

  @media (max-width: $md) {
    margin-top: 35px;
    margin-bottom: 35px;
  }

  @media (max-width: $sm) {
    margin-top: 0px;
    margin-bottom: 20px;
  }

  .swiper-container {
    max-width: 670px;
  }
}

.s-page-home-about-col {
  position: relative;
}

.s-page-home-about-slide {
  @media (max-width: $lg) {
    padding: 0 60px;
  }

  @media (max-width: $md) {
    padding: 0 30px;
  }
}
</style>
