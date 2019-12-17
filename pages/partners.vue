<template>
  <div class="page page-partners">
    <div class="dot dark-blue first" data-aos="fade" data-aos-delay="200"></div>
    <div
      class="dot light-orange second"
      data-aos="fade"
      data-aos-delay="400"
    ></div>
    <div
      :style="`background-image: url('${designPicture1}');`"
      class="dot with-images third"
      data-aos="fade"
      data-aos-delay="600"
    ></div>

    <header class="page-partners-header">
      <container>
        <a-row :gutter="20">
          <a-col :xl="{ offset: 2, span: 22 }">
            <h1 class="title-h1" data-aos="fade" data-aos-delay="200">
              {{ $t('p_partners.title') }}
            </h1>
          </a-col>
        </a-row>
      </container>
    </header>

    <section class="s-partners-advantages">
      <round-animation>
        <round-animation-circle class="round-animation-first">
          <p
            class="round-animation-text text-xxxl"
            data-aos="fade"
            data-aos-delay="200"
          >
            {{ $t('p_partners.items[0]') }}
          </p>
          <round-animation-circle class="round-animation-second">
            <p
              class="round-animation-text text-xxxl"
              data-aos="fade"
              data-aos-delay="300"
            >
              {{ $t('p_partners.items[1]') }}
            </p>
            <round-animation-circle class="round-animation-third">
              <p
                class="round-animation-text text-xxxl"
                data-aos="fade"
                data-aos-delay="400"
              >
                {{ $t('p_partners.items[2]') }}
              </p>
              <round-animation-inner data-aos="fade" data-aos-delay="700">
                <img
                  class="round-animation-logo"
                  src="~/static/images/LogoIcon.svg"
                  alt="Logo"
                  data-aos="zoom-out"
                  data-aos-delay="800"
                />
              </round-animation-inner>
            </round-animation-circle>
          </round-animation-circle>
        </round-animation-circle>
      </round-animation>

      <div
        class="page-partners-message-wrapper"
        data-aos="zoom-out"
        data-aos-delay="200"
      >
        <span class="page-partners-message accent-border text-black">
          {{ $t('p_partners.message') }}
        </span>
      </div>
    </section>

    <adventages>
      <h2
        slot="title"
        class="title-h2 text-light"
        data-aos="fade"
        data-aos-delay="200"
      >
        {{ $t('p_partners.advantages.title') }}
      </h2>

      <container>
        <a-row :gutter="20">
          <a-col :lg="{ offset: 2, span: 6 }" :md="{ span: 8 }">
            <adventages-item
              :iconSrc="MarkSettings"
              data-aos="fade"
              data-aos-delay="200"
            >
              {{ $t('p_partners.advantages[1]') }}
            </adventages-item>
          </a-col>

          <a-col :lg="{ span: 8 }" :md="{ span: 8 }">
            <adventages-item
              :iconSrc="CubeMolecule"
              data-aos="fade"
              data-aos-delay="400"
            >
              {{ $t('p_partners.advantages[2]') }}
            </adventages-item>
          </a-col>

          <a-col :lg="{ span: 6 }" :md="{ span: 8 }">
            <adventages-item
              :iconSrc="Roket"
              data-aos="fade"
              data-aos-delay="600"
            >
              {{ $t('p_partners.advantages[3]') }}
            </adventages-item>
          </a-col>
        </a-row>

        <a-row :gutter="20">
          <a-col :lg="{ offset: 2, span: 6 }" :md="{ span: 8 }">
            <adventages-item
              :iconSrc="Hearth"
              data-aos="fade"
              data-aos-delay="200"
            >
              {{ $t('p_partners.advantages[4]') }}
            </adventages-item>
          </a-col>

          <a-col :lg="{ span: 8 }" :md="{ span: 8 }">
            <adventages-item
              :iconSrc="Social"
              data-aos="fade"
              data-aos-delay="400"
            >
              {{ $t('p_partners.advantages[5]') }}
            </adventages-item>
          </a-col>

          <a-col :lg="{ span: 6 }" :md="{ span: 8 }">
            <adventages-item
              :iconSrc="Defend"
              data-aos="fade"
              data-aos-delay="600"
            >
              {{ $t('p_partners.advantages[6]') }}
            </adventages-item>
          </a-col>
        </a-row>
      </container>
    </adventages>

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
import RoundAnimationInner from '~/components/roundAnimation/RoundAnimationInner.vue';
import Adventages from '~/components/adventages/Adventages.vue';
import AdventagesItem from '~/components/adventages/AdventagesItem.vue';
import BaseButton from '~/components/baseComponents/BaseButton.vue';
import ApplicationForm from '~/components/form/ApplicationForm.vue';
import ApplicationFormRow from '~/components/form/ApplicationFormRow.vue';
import ApplicationFormField from '~/components/form/ApplicationFormField.vue';
import ApplicationFormTextarea from '~/components/form/ApplicationFormTextarea.vue';

import designPicture1 from '~/static/images/designPicture/designPicture1.jpg';

import MarkSettings from '~/static/images/MarkSettings.svg';
import CubeMolecule from '~/static/images/CubeMolecule.svg';
import Roket from '~/static/images/Roket.svg';
import Hearth from '~/static/images/Hearth.svg';
import Social from '~/static/images/Social.svg';
import Defend from '~/static/images/Defend.svg';

export default {
  components: {
    Container,
    RoundAnimation,
    RoundAnimationCircle,
    RoundAnimationInner,
    Adventages,
    AdventagesItem,
    BaseButton,
    ApplicationForm,
    ApplicationFormRow,
    ApplicationFormField,
    ApplicationFormTextarea
  },

  data() {
    return {
      designPicture1,
      MarkSettings,
      CubeMolecule,
      Roket,
      Hearth,
      Social,
      Defend
    };
  },

  methods: {
    sendForm() {
      this.$store.dispatch('sendForm', this);
    }
  }
};
</script>

<style lang="scss" scoped>
.page-partners {
  position: relative;
  padding-top: 90px;

  .dot {
    &.first {
      top: 0;
      right: 26%;
      width: 60px;
      height: 60px;

      @media (max-width: $xl) {
        right: 10%;
      }

      @media (max-width: $sm) {
        left: 25%;
      }
    }

    &.second {
      top: 300px;
      right: 15%;
      width: 95px;
      height: 95px;

      @media (max-width: $sm) {
        top: 100px;
        left: 0;
      }
    }

    &.third {
      top: 0;
      right: calc(50% - calc(195px / 2));
      width: 195px;
      height: 195px;

      @media (max-width: $lg) {
        right: calc(50% - calc(195px / 1.2));
      }

      @media (max-width: $sm) {
        right: 10px;
        width: 120px;
        height: 120px;
      }
    }
  }

  .adventages {
    .ant-row {
      &:not(:last-of-type) {
        margin-bottom: 60px;

        @media (max-width: $md) {
          margin-bottom: 40px;
        }
      }

      div[class^='ant-col'] {
        &:not(:last-of-type) {
          @media (max-width: $md) {
            margin-bottom: 40px;
          }
        }
      }
    }
  }
}

.page-partners-header {
  margin-bottom: 30px;

  @media (max-width: $lg) {
    margin-bottom: 150px;
  }

  @media (max-width: $sm) {
    margin-bottom: 100px;
  }
}

.s-partners-advantages {
  width: 100%;
  margin-bottom: 60px;
  overflow: hidden;

  @media (max-width: $sm) {
    margin-bottom: 30px;
  }

  .round-animation {
    width: 985px;
    height: 985px;
    margin-left: -260px;

    @media (max-width: $osx) {
      width: 800px;
      height: 800px;
      margin-left: -200px;
    }

    @media (max-width: $xl) {
      width: 650px;
      height: 650px;
      margin-left: -170px;
    }

    @media (max-width: $lg) {
      width: 500px;
      height: 500px;
    }

    @media (max-width: $md) {
      width: 400px;
      height: 400px;
    }

    @media (max-width: $sm) {
      width: 300px;
      height: 300px;
      margin-left: -100px;
    }
  }

  .round-animation-circle {
    padding: 100px;

    @media (max-width: $osx) {
      padding: 80px;
    }

    @media (max-width: $xl) {
      padding: 65px;
    }

    @media (max-width: $lg) {
      padding: 50px;
    }

    @media (max-width: $md) {
      padding: 40px;
    }

    @media (max-width: $sm) {
      padding: 35px;
    }
  }

  .round-animation-inner {
    border: 20px solid #f16922;

    @media (max-width: $xl) {
      border-width: 15px;
    }

    @media (max-width: $lg) {
      border-width: 10px;
    }

    @media (max-width: $sm) {
      border-width: 7px;
    }
  }

  .round-animation-logo {
    width: 175px;

    @media (max-width: $lg) {
      width: 100px;
    }

    @media (max-width: $md) {
      width: 70px;
    }

    @media (max-width: $sm) {
      width: 50px;
    }
  }

  .round-animation-text {
    position: absolute;
    width: 100%;
    max-width: 580px;
    font-weight: 600;

    @media (max-width: $osx) {
      max-width: 450px;
      font-size: 20px;
    }

    @media (max-width: $xl) {
      max-width: 450px;
      font-size: 18px;
    }

    @media (max-width: $lg) {
      max-width: 350px;
      font-size: 16px;
    }

    @media (max-width: $md) {
      width: 140%;
    }

    @media (max-width: $sm) {
      max-width: 150%;
      font-size: 12px;
    }
  }

  .round-animation-first {
    > .round-animation-text {
      top: 390px;
      left: calc(100% + 15px);
      max-width: 550px;

      @media (max-width: $osx) {
        top: 330px;
      }

      @media (max-width: $xl) {
        max-width: 450px;
      }

      @media (max-width: $lg) {
        top: 225px;
        max-width: 350px;
      }

      @media (max-width: $md) {
        top: 160px;
        width: 140%;
      }

      @media (max-width: $sm) {
        top: 100px;
        left: 70%;
        width: 67%;
      }
    }
  }

  .round-animation-second {
    > .round-animation-text {
      bottom: 205px;
      left: calc(100% + 15px);
      max-width: 550px;

      @media (max-width: $osx) {
        bottom: 150px;
      }

      @media (max-width: $xl) {
        bottom: 50px;
        max-width: 450px;
      }

      @media (max-width: $lg) {
        bottom: 20px;
        max-width: 350px;
      }

      @media (max-width: $md) {
        bottom: 0;
      }

      @media (max-width: $sm) {
        bottom: -30px;
        left: 40%;
        width: 100%;
      }
    }
  }

  .round-animation-third {
    > .round-animation-text {
      top: -35px;
      left: 95%;

      @media (max-width: $md) {
        top: -80px;
      }

      @media (max-width: $sm) {
        top: -80px;
        left: 60%;
      }
    }
  }
}

.page-partners-message-wrapper {
  display: flex;
  justify-content: center;
  margin-top: -120px;

  @media (max-width: $xl) {
    margin-top: 20px;
  }
}

.page-partners-message {
  margin-right: auto;
  margin-left: auto;
  font-size: 25px;
  font-family: 'Lazurski', $sans-serif;
  text-align: center;
  background-color: $body-bg;

  @media (max-width: $sm) {
    font-size: 18px;
  }
}
</style>
