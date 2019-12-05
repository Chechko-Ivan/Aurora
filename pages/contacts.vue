<template>
  <div class="page page-contacts">
    <header
      :style="{ backgroundImage: `url(${MapBg})` }"
      class="page-home-header"
    >
      <container>
        <a-row :gutter="{ md: 20 }" class="page-contacts-top">
          <a-col :xl="{ offset: 2, span: 22 }">
            <span class="title-top">
              Частное производственное унитарное предприятие
            </span>
            <h1 class="title-h1">Аврорапласт</h1>
          </a-col>
        </a-row>

        <a-row :gutter="{ md: 20 }" class="page-contacts-list">
          <a-col :xl="{ offset: 2, span: 22 }">
            <div class="page-contacts-item">
              <div class="page-contacts-item-icon">
                <img src="~/static/images/Pin.svg" alt="Pin" />
              </div>
              <div class="page-contacts-item-desc">
                <span class="page-contacts-item-title">Адрес</span>
                <a
                  :href="`http://maps.yandex.ru/?text=53.126592,29.186461`"
                  target="_blank"
                  nofollow
                  noreferrer
                  noopener
                >
                  Республика Беларусь, г. Бобруйск, ул. Бахарова, 206.
                </a>
              </div>
            </div>
          </a-col>

          <a-col :xl="{ offset: 2, span: 22 }">
            <div class="page-contacts-item">
              <div class="page-contacts-item-icon">
                <img src="~/static/images/Phone.svg" alt="Phone" />
              </div>
              <div class="page-contacts-item-desc">
                <span class="page-contacts-item-title">Телефон/факс</span>
                <a href="tel:+375225485556">(+375 225) 48 55 56</a>
                <a href="tel:+375225496767">(+375 225) 49 67 67</a>
              </div>
            </div>
          </a-col>

          <a-col :xl="{ offset: 2, span: 22 }">
            <div class="page-contacts-item">
              <div class="page-contacts-item-icon">
                <img src="~/static/images/Mail.svg" alt="Mail" />
              </div>
              <div class="page-contacts-item-desc">
                <span class="page-contacts-item-title">E-mail</span>
                <a href="mailto:info@avroraplast.ru">info@avroraplast.ru</a>
              </div>
            </div>
          </a-col>
        </a-row>
      </container>
    </header>

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
import Container from '@/components/Container.vue';
import BaseButton from '@/components/baseComponents/BaseButton.vue';
import ApplicationForm from '@/components/form/ApplicationForm.vue';
import ApplicationFormRow from '@/components/form/ApplicationFormRow.vue';
import ApplicationFormField from '@/components/form/ApplicationFormField.vue';
import ApplicationFormTextarea from '@/components/form/ApplicationFormTextarea.vue';

import MapBg from '~/static/images/Map.jpg';

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
      MapBg
    };
  }
};
</script>

<style lang="scss" scoped>
.page-contacts {
  position: relative;

  .s-form,
  .application-form {
    margin-top: 0;
  }

  .s-form {
    margin-top: -100px;
  }
}

.page-contacts-map {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 930px;
}

.page-contacts-top {
  margin-bottom: 120px;

  @media (max-width: $sm) {
    margin-bottom: 60px;
  }
}

.page-home-header {
  margin-top: -120px;
  padding: 120px 0 220px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: $lg) {
    background-position: 80% center;
  }

  @media (max-width: $sm) {
    padding-bottom: 180px;
    background-position: 60%;
  }
}

.page-contacts-list {
  div[class^='ant-col'] {
    &:not(:last-of-type) {
      margin-bottom: 40px;
    }
  }
}

.page-contacts-item {
  display: flex;
}

.page-contacts-item-icon {
  margin-right: 30px;
  flex-shrink: 0;

  @media (max-width: $sm) {
    margin-right: 15px;
  }

  img {
    width: 50px;

    @media (max-width: $sm) {
      width: 40px;
    }
  }
}

.page-contacts-item-desc {
  display: flex;
  flex-direction: column;
  max-width: 480px;

  span {
    margin-bottom: 5px;
    font-size: 20px;

    @media (max-width: $sm) {
      font-size: 18px;
    }
  }

  a {
    font-weight: 600;
    font-size: 30px;
    color: $color-black;

    @media (max-width: $sm) {
      font-size: 20px;
    }

    &:hover {
      color: $color-primary;
    }

    &:not(:last-of-type) {
      margin-bottom: 10px;
    }
  }
}
</style>
