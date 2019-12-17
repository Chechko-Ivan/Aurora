<template>
  <div class="page page-jobs">
    <header class="page-jobs-header">
      <container>
        <a-row :gutter="{ md: 20 }" type="flex" align="bottom">
          <a-col
            :xl="{ offset: 2, span: 14 }"
            :md="{ span: 14, order: 1 }"
            :xs="{ span: 24, order: 2 }"
          >
            <div class="page-jobs-header-title">
              <h1 class="title-h1" data-aos="fade" data-aos-delay="500">
                {{ $t('p_jobs.header.title') }}
              </h1>
              <p class="text-xxxl" data-aos="fade" data-aos-delay="800">
                {{ $t('p_jobs.header.text') }}
              </p>
            </div>
          </a-col>

          <a-col
            :xl="{ span: 8 }"
            :md="{ span: 10, order: 2 }"
            :xs="{ span: 24, order: 1 }"
          >
            <div
              class="page-jobs-header-employer-image"
              data-aos="zoom-out"
              data-aos-delay="400"
            >
              <round-animation>
                <round-animation-circle>
                  <round-animation-circle>
                    <round-animation-circle></round-animation-circle>
                  </round-animation-circle>
                </round-animation-circle>
              </round-animation>
              <div>
                <img
                  src="~/static/images/designPicture/girl.png"
                  alt="employer"
                />
              </div>
            </div>
          </a-col>
        </a-row>
      </container>
    </header>

    <section class="s-jobs-advantages">
      <container>
        <a-row :gutter="{ md: 20 }">
          <a-col
            :xl="{ offset: 2, span: 20 }"
            class="s-jobs-advantages-slider-paginations"
          >
            <div ref="mySwiper" v-swiper:mySwiper="swiperOption2">
              <div class="swiper-wrapper">
                <div
                  @click="changeSlide(0)"
                  :class="[
                    'swiper-slide',
                    { active: currentSliderIndex === 0 }
                  ]"
                  data-aos="fade"
                >
                  <span>
                    {{ $t('p_jobs.advantages[0].title') }}
                  </span>
                </div>

                <div
                  @click="changeSlide(1)"
                  :class="[
                    'swiper-slide',
                    { active: currentSliderIndex === 1 }
                  ]"
                  data-aos="fade"
                  data-aos-delay="400"
                >
                  <span>
                    {{ $t('p_jobs.advantages[1].title') }}
                  </span>
                </div>

                <div
                  @click="changeSlide(2)"
                  :class="[
                    'swiper-slide',
                    { active: currentSliderIndex === 2 }
                  ]"
                  data-aos="fade"
                  data-aos-delay="600"
                >
                  <span>
                    {{ $t('p_jobs.advantages[2].title') }}
                  </span>
                </div>
              </div>
            </div>
          </a-col>
        </a-row>

        <a-row>
          <a-col :span="24">
            <div
              ref="mySswiper"
              v-swiper:mySswiper="swiperOption"
              data-aos="fade"
            >
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="s-jobs-advantages-card">
                    <div
                      class="s-jobs-advantages-card-image"
                      style="background-image: url(images/designPicture/JobsAdvantages1.png);"
                    ></div>
                    <div class="s-jobs-advantages-card-desc">
                      <p>
                        {{ $t('p_jobs.advantages[0].title') }}
                      </p>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="s-jobs-advantages-card">
                    <div
                      class="s-jobs-advantages-card-image"
                      style="background-image: url(images/designPicture/JobsAdvantages2.png);"
                    ></div>
                    <div class="s-jobs-advantages-card-desc">
                      <p>
                        {{ $t('p_jobs.advantages[1].title') }}
                      </p>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="s-jobs-advantages-card">
                    <div
                      class="s-jobs-advantages-card-image"
                      style="background-image: url(/images/designPicture/JobsAdvantages3.png);"
                    ></div>
                    <div class="s-jobs-advantages-card-desc">
                      <p>
                        {{ $t('p_jobs.advantages[2].title') }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a-col>
        </a-row>
      </container>
    </section>

    <section class="s-advantages page-jobs-statistic">
      <container>
        <a-row :gutter="{ md: 20 }">
          <a-col :xl="{ offset: 4, span: 16 }">
            <div class="page-jobs-statistic-title">
              <div class="page-jobs-statistic-title-top">
                <span data-aos="fade">
                  {{ $t('p_jobs.statistic.if_a') }}
                </span>
                <p class="text-xxxl" data-aos="fade" data-aos-delay="400">
                  {{ $t('p_jobs.statistic.message') }}
                </p>
              </div>
            </div>
            <div class="page-jobs-statistic-title-bottom">
              <h2 data-aos="fade" data-aos-delay="600">
                {{ $t('p_jobs.statistic.title') }}
              </h2>
            </div>
          </a-col>
        </a-row>

        <a-row :gutter="{ md: 20 }" class="page-jobs-statistic-tabs">
          <a-col :xl="{ offset: 2, span: 22 }">
            <a-tabs
              :tabPosition="windowWidth > 575 ? 'left' : 'top'"
              v-model="activeAdvanatagePaneKey"
              data-aos="fade"
              data-aos-delay="400"
            >
              <a-tab-pane
                v-for="(statistic, index) in $t('p_jobs.statistic.items')"
                :key="index"
                :tab="statistic.title"
              >
                <div class="custome-progress">
                  <img
                    src="~/static/images/designPicture/Employers.png"
                    alt="Employers"
                    class="custome-progress-image"
                  />
                  <div class="custome-progress-desc">
                    <h3 class="custome-progress-desc-title">
                      {{ statistic.shortTitle }}
                    </h3>
                    <span class="custome-progress-desc-num">
                      {{ statistic.num }}
                    </span>
                    <span class="custome-progress-desc-bottom">
                      {{ statistic.subtitle }}
                    </span>
                  </div>
                  <a-progress :percent="index * 25" type="circle" />
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
            <application-form accent data-aos="zoom-out" data-aos-delay="200">
              <h2 slot="title">
                {{ $t('form.write_to_us') }}
              </h2>

              <application-form-row>
                <application-form-field
                  :error="$store.state.name.error"
                  :value="$store.state.name.value"
                  @update="
                    (e) =>
                      $store.commit('SET_FIELD_VALUE', {
                        name: 'name',
                        value: e
                      })
                  "
                  :placeholder="`${$t('form.input.name.placeholder')}*`"
                ></application-form-field>
              </application-form-row>

              <application-form-row>
                <application-form-field
                  :error="$store.state.phone.error"
                  :value="$store.state.phone.value"
                  @update="
                    (e) =>
                      $store.commit('SET_FIELD_VALUE', {
                        name: 'phone',
                        value: e
                      })
                  "
                  :placeholder="`${$t('form.input.phone.placeholder')}*`"
                  type="tel"
                ></application-form-field>

                <application-form-field
                  :error="$store.state.email.error"
                  :value="$store.state.email.value"
                  @update="
                    (e) =>
                      $store.commit('SET_FIELD_VALUE', {
                        name: 'email',
                        value: e
                      })
                  "
                  :placeholder="$t('form.input.email.placeholder')"
                  type="email"
                ></application-form-field>
              </application-form-row>

              <application-form-row>
                <application-form-textarea
                  :error="$store.state.message.error"
                  :value="$store.state.message.value"
                  @update="
                    (e) =>
                      $store.commit('SET_FIELD_VALUE', {
                        name: 'message',
                        value: e
                      })
                  "
                  :placeholder="`${$t('form.input.message.placeholder')}*`"
                ></application-form-textarea>
              </application-form-row>

              <div class="button-wrapper">
                <base-button
                  @click.prevent="$store.state.formLoked ? null : sendForm()"
                  color="light"
                  large
                >
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
import RoundAnimation from '~/components/roundAnimation/RoundAnimation.vue';
import RoundAnimationCircle from '~/components/roundAnimation/RoundAnimationCircle.vue';
import BaseButton from '~/components/baseComponents/BaseButton.vue';
import ApplicationForm from '~/components/form/ApplicationForm.vue';
import ApplicationFormRow from '~/components/form/ApplicationFormRow.vue';
import ApplicationFormField from '~/components/form/ApplicationFormField.vue';
import ApplicationFormTextarea from '~/components/form/ApplicationFormTextarea.vue';

export default {
  components: {
    Container,
    BaseButton,
    RoundAnimation,
    RoundAnimationCircle,
    ApplicationForm,
    ApplicationFormRow,
    ApplicationFormField,
    ApplicationFormTextarea
  },

  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 40,

        breakpoints: {
          1339: {
            spaceBetween: 20
          },

          767: {
            spaceBetween: 15
          }
        }
      },

      swiperOption2: {
        slidesPerView: 'auto',
        spaceBetween: 50,

        breakpoints: {
          1339: {
            spaceBetween: 25
          },

          767: {
            spaceBetween: 20
          }
        }
      },

      currentSliderIndex: 0,
      windowWidth: null,
      activeAdvanatagePaneKey: 0
    };
  },

  computed: {
    swiper() {
      return this.$refs.mySswiper.swiper;
    }
  },

  mounted() {
    this.windowWidth = window.innerWidth;
  },

  methods: {
    changeSlide(index) {
      this.swiper.slideTo(index);
      this.currentSliderIndex = index;
    },

    sendForm() {
      this.$store.dispatch('sendForm', this);
    }
  }
};
</script>

<style lang="scss" scoped>
.page-jobs {
  padding-top: 90px;
  overflow: hidden;

  @media (max-width: $lg) {
    padding-top: 70px;
  }
}

.page-jobs-header-title {
  margin-bottom: 80px;

  @media (max-width: $lg) {
    margin-bottom: 50px;
  }
}

.page-jobs-header-employer-image {
  position: relative;

  @media (max-width: $md) {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 50px;
  }

  .round-animation {
    position: absolute;
    top: 0;
    left: 50%;
    z-index: 0;
    width: 440px;
    max-width: 440px;
    height: 440px;
    transform: translate(-50%, -20%);

    @media (max-width: $osx) {
      width: 350px;
      height: 350px;
    }

    @media (max-width: $lg) {
      width: 290px;
      height: 290px;
    }

    @media (max-width: $sm) {
      width: 270px;
      height: 270px;
    }
  }

  .round-animation-circle {
    padding: 50px;

    @media (max-width: $lg) {
      padding: 35px;
    }
  }

  img {
    position: relative;
    z-index: 1;

    @media (max-width: $osx) {
      width: 300px;
    }

    @media (max-width: $sm) {
      width: 250px;
    }
  }
}

.s-jobs-advantages {
  padding: 60px 0;
  background-color: $color-lighten-blue;

  .swiper-container {
    overflow: visible;
  }

  .swiper-slide {
    width: 880px;

    @media (max-width: $xl) {
      width: 600px;
    }

    @media (max-width: $md) {
      width: 95%;
    }
  }
}

.s-jobs-advantages-card {
  display: flex;
  height: 305px;
  overflow: hidden;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 8px 20px 0 rgba(13, 28, 84, 0.25);

  @media (max-width: $sm) {
    flex-direction: column;
    height: auto;
  }
}

.s-jobs-advantages-card-image {
  flex-shrink: 0;
  width: 455px;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: $xl) {
    width: 300px;
  }

  @media (max-width: $md) {
    width: 50%;
  }

  @media (max-width: $sm) {
    width: 100%;
    height: 200px;
  }
}

.s-jobs-advantages-card-desc {
  position: relative;
  padding: 20px;
  overflow: auto;
  font-size: $text-size-xxl;
  line-height: $text-line-height-xxl;
  background-image: url('../static/images/LogoIconGray.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 220px;

  @media (max-width: $xl) {
    font-size: $text-size-xxl - 4px;
    background-size: 150px;
  }

  @media (max-width: $md) {
    padding: 10px;
  }

  p {
    &:first-of-type {
      margin-top: 0;
    }
  }
}

.s-jobs-advantages-slider-paginations {
  margin-bottom: 40px;

  .swiper-slide {
    width: 490px !important;
    font-weight: 600;
    font-size: 20px;
    color: $color-text-primary;
    cursor: pointer;

    @media (max-width: $xl) {
      font-size: 18px;
      max-width: 440px;
    }

    @media (max-width: $md) {
      font-size: 15px;
      max-width: 70%;
    }

    @media (max-width: $sm) {
      font-size: 14px;
      max-width: 90%;
    }

    &:hover {
      color: $color-black;
    }

    &.active {
      color: $color-black;
    }
  }
}

.page-jobs-statistic {
  margin-top: 120px;
  margin-bottom: 0;

  @media (max-width: $md) {
    margin-top: 80px;
  }

  @media (max-width: $sm) {
    margin-top: 60px;
  }
}

.page-jobs-statistic-title {
  display: flex;
  flex-direction: column;
}

.page-jobs-statistic-title-top {
  display: flex;
  align-items: flex-end;

  @media (max-width: $sm) {
    flex-direction: column;
    align-items: flex-start;
  }

  span {
    font-family: 'Lazurski', $sans-serif;
    font-size: 111px;
    color: $color-primary;
    line-height: 0.6;
    flex-shrink: 0;
    margin-right: 10px;

    @media (max-width: $osx) {
      font-size: 100px;
    }

    @media (max-width: $md) {
      font-size: 80px;
    }

    @media (max-width: $sm) {
      font-size: 60px;
      margin-right: 0;
      line-height: 1;
    }
  }

  p {
    text-align: justify;
    margin: 0;

    @media (max-width: $osx) {
      font-size: 20px;
    }

    @media (max-width: $md) {
      font-size: 16px;
    }
  }
}

.page-jobs-statistic-title-bottom {
  margin-top: 20px;

  h2 {
    @media (max-width: $osx) {
      font-size: 30px;
    }

    @media (max-width: $md) {
      font-size: 25px;
    }

    @media (max-width: $sm) {
      font-size: 20px;
    }
  }
}

.page-jobs-statistic-tabs {
  margin-top: 130px;
}
</style>
