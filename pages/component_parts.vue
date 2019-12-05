<template>
  <div class="page page-component-parts">
    <div class="dot dark-blue first"></div>
    <round-animation>
      <round-animation-circle>
        <round-animation-circle>
          <round-animation-inner></round-animation-inner>
        </round-animation-circle>
      </round-animation-circle>
    </round-animation>

    <header class="page-component-parts-header">
      <container>
        <a-row :gutter="20">
          <a-col :xl="{ offset: 2, span: 22 }">
            <h1 class="title-h1">{{ $t('component_parts.title') }}</h1>
          </a-col>
        </a-row>
      </container>
    </header>

    <section class="s-components">
      <container>
        <a-row :gutter="20" type="flex" align="middle">
          <a-col
            :xl="{ offset: 2, span: 12 }"
            :lg="{ span: 14 }"
            :md="{ span: 12 }"
          >
            <h2 class="text-black">Для экструзионных линий</h2>
            <p class="text-xxxl">
              Полный спектр оборудования и запасных частей для Ваших
              экструзионных линий по производству изделий из ПВХ
            </p>
          </a-col>

          <a-col :lg="{ span: 10 }" :md="{ span: 12 }">
            <img
              src="../static/images/designPicture/Machine.png"
              alt="Линия по производству ПВХ"
            />
          </a-col>
        </a-row>

        <a-row :gutter="20">
          <a-col
            v-for="(item, index) in $t('component_parts.component_list')"
            :key="index"
            :xl="{ span: 6 }"
            :lg="{ span: 8 }"
            :md="{ span: 12 }"
          >
            <div class="s-components-card">
              <h3 class="s-components-card-title">{{ item.title }}</h3>
              <span class="s-components-card-subtitle">
                {{ item.subtitle }}
              </span>
            </div>
          </a-col>
        </a-row>
      </container>
    </section>

    <section class="s-component-second">
      <container>
        <a-row :gutter="20" type="flex" align="middle">
          <a-col
            :xl="{ offset: 2, span: 14 }"
            :md="{ span: 14 }"
            :sm="{ span: 24 }"
          >
            <h2 class="text-black">Системы автоматического смешивания</h2>
          </a-col>

          <a-col
            :xl="{ offset: 2, span: 6 }"
            :md="{ span: 10 }"
            :sm="{ span: 24 }"
          >
            <img
              src="~/static/images/designPicture/Machine2.png"
              alt="Система автоматического смешивания"
            />
          </a-col>
        </a-row>
      </container>
    </section>

    <adventages>
      <h2 slot="title" class="title-h2 text-light">
        {{ $t('component_parts.advantages.title') }}
      </h2>

      <container>
        <a-row :gutter="20">
          <a-col :xl="{ offset: 2, span: 20 }">
            <adventages-item :iconSrc="Server" row>
              {{ $t('component_parts.advantages[1]') }}
            </adventages-item>
          </a-col>

          <a-col :xl="{ offset: 2, span: 20 }">
            <adventages-item :iconSrc="GearSettings" row>
              {{ $t('component_parts.advantages[2]') }}
            </adventages-item>
          </a-col>

          <a-col :xl="{ offset: 2, span: 20 }">
            <adventages-item :iconSrc="Plant" row>
              {{ $t('component_parts.advantages[3]') }}
            </adventages-item>
          </a-col>
        </a-row>
      </container>
    </adventages>

    <section class="s-form">
      <container>
        <a-row :gutter="{ md: 20 }">
          <a-col>
            <application-form accent>
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

import Server from '~/static/images/Server.svg';
import GearSettings from '~/static/images/GearSettings.svg';
import Plant from '~/static/images/Plant.svg';

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
      Server,
      GearSettings,
      Plant
    };
  }
};
</script>

<style lang="scss" scoped>
.page-component-parts {
  padding-top: 90px;

  .dot {
    top: -70px;
    right: 25%;
    width: 60px;
    height: 60px;

    @media (max-width: $xl) {
      right: 10%;
    }
  }

  .round-animation {
    position: absolute;
    top: 0;
    right: 30%;
    width: 230px;
    height: 230px;

    @media (max-width: $xl) {
      right: 10%;
    }

    @media (max-width: $lg) {
      width: 180px;
      height: 180px;
    }
  }

  .title-h1 {
    max-width: 500px;
  }

  .round-animation-circle {
    padding: 35px;

    @media (max-width: $lg) {
      padding: 30px;
    }
  }

  .round-animation-inner {
    background-color: rgba($color-orange, 0.4);
  }

  .adventages {
    .container {
      div[class^='ant-col'] {
        &:not(:last-of-type) {
          margin-bottom: 40px;
        }
      }
    }
  }
}

.page-component-parts-header {
  margin-bottom: 40px;
}

.s-components {
  .ant-row-flex {
    @media (max-width: $sm) {
      margin-bottom: 50px;
    }
  }

  div[class^='ant-col'] {
    @media (min-width: $xl) {
      &:nth-child(-n + 4) {
        margin-bottom: 20px !important;
      }
    }

    @media (max-width: $xl) {
      &:nth-child(-n + 6) {
        margin-bottom: 20px !important;
      }
    }

    @media (max-width: $xl) {
      &:not(:last-of-type) {
        margin-bottom: 25px;
      }
    }
  }
}

.s-components-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 125px;
  padding: 0 30px;
  background: $color-white;
  border-radius: 8px;
  box-shadow: 0 8px 20px 0 rgba(13, 28, 84, 0.25);

  @media (max-width: $sm) {
    height: 110px;
  }
}

.s-components-card-title {
  margin: 0;
  font-weight: 600;
  font-size: 24px;
  color: $color-black;
  cursor: default;

  @media (max-width: $osx) {
    font-size: 22px;
  }

  @media (max-width: $sm) {
    font-size: 20px;
  }
}

.s-components-card-subtitle {
  font-size: 20px;
  color: $color-black;
  cursor: default;

  @media (max-width: $xl) {
    font-size: 18px;
  }

  @media (max-width: $sm) {
    font-size: 16px;
  }
}

.s-component-second {
  margin: 150px 0 60px;

  @media (max-width: $xl) {
    margin: 80px 0 60px;
  }

  h2 {
    @media (max-width: $md) {
      text-align: center;
    }
  }

  div[class^='ant-col'] {
    @media (max-width: $md) {
      display: flex;
      justify-content: center;
    }
  }
}

.s-components,
.s-component-second {
  h2 {
    margin-bottom: 40px;
    font-size: 50px;
    font-family: 'Source Sans Pro', $sans-serif;

    @media (max-width: $xl) {
      font-size: 40px;
    }

    @media (max-width: $md) {
      font-size: 30px;
    }

    @media (max-width: $sm) {
      margin-bottom: 20px;
      font-size: 25px;
    }
  }
}
</style>
