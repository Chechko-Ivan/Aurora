<template>
  <div class="page page-suppliers">
    <div class="dot dark-blue first"></div>
    <div class="dot light-orange second"></div>
    <round-animation>
      <round-animation-circle>
        <round-animation-circle>
          <round-animation-inner></round-animation-inner>
        </round-animation-circle>
      </round-animation-circle>
    </round-animation>

    <header class="page-suppliers-header">
      <container>
        <a-row :gutter="20">
          <a-col :xl="{ offset: 2, span: 22 }">
            <h1 class="title-h1">{{ $t('p_suppliers.title') }}</h1>
          </a-col>

          <a-col :xl="{ offset: 2, span: 14 }">
            <p class="text-xxxl">
              Мы всегда готовы к взаимовыгодному сотрудничеству. Если вы можете
              предложить качественные материалы и готовы к долгосрочному
              сотрудничеству - свяжитесь с нами и мы найдем общий язык.
            </p>
          </a-col>
        </a-row>
      </container>
    </header>

    <section class="s-suppliers-content">
      <container>
        <a-row :gutter="20">
          <a-col :xl="{ offset: 2, span: 20 }">
            <p class="text-xxxl text-black">
              Чтобы обеспечить бесперебойную работу нашего предприятия, мы
              заинтересованы в сотрудничестве с поставщиками качественных
              товаров.
            </p>

            <div class="s-suppliers-content-list-title text-xxl">
              На постоянной основе ведём закупку:
            </div>
            <ul class="s-suppliers-content-list list-style-dots">
              <li>Защитной пленки для сэндвич панелей и подоконника ПВХ.</li>
              <li>Микрокальциты.</li>
              <li>Ламинационной пленки для подоконника.</li>
              <li>Однокомпонентный полиуретановый клей для сэндвич панелей.</li>
              <li>ПВХ-С.</li>
              <li>Рециклат.</li>
              <li>Добавки для переработки ПВХ в широком ассортименте.</li>
            </ul>
            <div class="link-wrapper">
              <base-nuxt-link :to="localePath('contacts')">
                Прислать коммерческое предложение
                <svg-icon slot="icon" name="ArrowRight" />
              </base-nuxt-link>
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
import RoundAnimation from '@/components/roundAnimation/RoundAnimation.vue';
import RoundAnimationCircle from '@/components/roundAnimation/RoundAnimationCircle.vue';
import RoundAnimationInner from '@/components/roundAnimation/RoundAnimationInner.vue';
import BaseButton from '@/components/baseComponents/BaseButton.vue';
import BaseNuxtLink from '@/components/baseComponents/BaseNuxtLink.vue';
import ApplicationForm from '@/components/form/ApplicationForm.vue';
import ApplicationFormRow from '@/components/form/ApplicationFormRow.vue';
import ApplicationFormField from '@/components/form/ApplicationFormField.vue';
import ApplicationFormTextarea from '@/components/form/ApplicationFormTextarea.vue';

export default {
  components: {
    Container,
    RoundAnimation,
    RoundAnimationCircle,
    RoundAnimationInner,
    BaseButton,
    BaseNuxtLink,
    ApplicationForm,
    ApplicationFormRow,
    ApplicationFormField,
    ApplicationFormTextarea
  }
};
</script>

<style lang="scss" scoped>
.page-suppliers {
  margin-top: 90px;

  .round-animation {
    position: absolute;
    top: -180px;
    right: 10%;
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

  .round-animation-circle {
    padding: 35px;

    @media (max-width: $lg) {
      padding: 30px;
    }
  }

  .round-animation-inner {
    background-color: rgba($color-orange, 0.4);
  }

  .dot {
    &.first {
      top: 0;
      right: 45%;
      width: 80px;
      height: 80px;

      @media (max-width: $lg) {
        display: none;
      }
    }

    &.second {
      top: 130px;
      right: 5%;
      width: 55px;
      height: 55px;
    }
  }

  .title-h1 {
    margin-bottom: 30px;
  }
}

.s-suppliers-content {
  margin-top: 120px;

  @media (max-width: $osx) {
    margin-top: 70px;
  }

  @media (max-width: $lg) {
    margin-top: 30px;
  }

  .link-wrapper {
    margin-top: 40px;
  }
}

.s-suppliers-content-list-title {
  margin-bottom: 20px;
}

.s-suppliers-content-list {
  @include list-reset;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;

  li {
    flex-basis: calc(50% - 20px);
    font-size: 20px;
    line-height: 1.25;
    margin-bottom: 10px;

    @media (max-width: $md) {
      font-size: 18px;
      flex-basis: calc(100% - 20px);
    }
  }
}
</style>