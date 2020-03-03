<template>
  <div class="page page-contacts">
    <header
      :style="{ backgroundImage: `url(${MapBg})` }"
      class="page-home-header"
    >
      <container>
        <a-row :gutter="{ md: 20 }" class="page-contacts-top">
          <a-col :xl="{ offset: 2, span: 22 }">
            <span class="title-top" data-aos="fade" data-aos-delay="400">
              {{ $t('p_contacts.subtitle') }}
            </span>
            <h1 class="title-h1" data-aos="fade" data-aos-delay="200">
              {{ $t('p_contacts.title') }}
            </h1>
          </a-col>
        </a-row>

        <a-row :gutter="{ md: 20 }" class="page-contacts-list">
          <a-col :xl="{ offset: 2, span: 22 }">
            <div
              class="page-contacts-item"
              data-aos="fade"
              data-aos-delay="200"
            >
              <div class="page-contacts-item-icon">
                <img src="~/static/images/Pin.svg" alt="Pin" />
              </div>
              <div class="page-contacts-item-desc">
                <span class="page-contacts-item-title">
                  {{ $t('p_contacts.address') }}
                </span>
                <a
                  :href="`http://maps.yandex.ru/?text=53.126592,29.186461`"
                  target="_blank"
                  nofollow
                  noreferrer
                  noopener
                >
                  {{ $t('p_contacts.bel_address') }}
                </a>
              </div>
            </div>
          </a-col>

          <a-col :xl="{ offset: 2, span: 22 }">
            <div
              class="page-contacts-item"
              data-aos="fade"
              data-aos-delay="400"
            >
              <div class="page-contacts-item-icon">
                <img src="~/static/images/Phone.svg" alt="Phone" />
              </div>
              <div class="page-contacts-item-desc">
                <span class="page-contacts-item-title">
                  {{ $t('p_contacts.tel_label') }}
                </span>
                <a @click="sendTelMetriks('tel')" href="tel:+375225745556">
                  +375 (225) 74 55 56
                </a>
                <a @click="sendTelMetriks('tel')" href="tel:+375225786767">
                  +375 (225) 78 67 67
                </a>
                <br />
                <span class="page-contacts-item-title">
                  {{ $t('p_contacts.title_second') }}
                </span>
                <span class="page-contacts-item-title">
                  {{ $t('p_contacts.subtitle_second') }}
                </span>
                <a @click="sendTelMetriks('tel')" href="tel:+74959751214">
                  +7 (495) 975 12 14
                </a>
                <a @click="sendTelMetriks('tel')" href="tel:+74956404886">
                  +7 (495) 640 48 86
                </a>
                <a @click="sendTelMetriks('tel')" href="tel:+79206616576">
                  +7 (920) 661 65 76
                </a>
                <!-- <span class="page-contacts-item-title">
                  {{ $t('p_contacts.subtitle_third') }}
                </span> -->
                <!-- <a @click="sendTelMetriks('tel')" href="tel:+79206612931">
                  +7 (920) 661 29 31
                </a> -->
              </div>
            </div>
          </a-col>

          <a-col :xl="{ offset: 2, span: 22 }">
            <div
              class="page-contacts-item"
              data-aos="fade"
              data-aos-delay="600"
            >
              <div class="page-contacts-item-icon">
                <img src="~/static/images/Mail.svg" alt="Mail" />
              </div>
              <div class="page-contacts-item-desc">
                <span class="page-contacts-item-title">E-mail</span>
                <a
                  @click="sendTelMetriks('email')"
                  href="mailto:info@avroraplast.ru"
                >
                  info@avroraplast.ru
                </a>
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
import BaseButton from '~/components/baseComponents/BaseButton.vue';
import ApplicationForm from '~/components/form/ApplicationForm.vue';
import ApplicationFormRow from '~/components/form/ApplicationFormRow.vue';
import ApplicationFormField from '~/components/form/ApplicationFormField.vue';
import ApplicationFormTextarea from '~/components/form/ApplicationFormTextarea.vue';

import MapBg from '~/static/images/Map.jpg';

export default {
  head() {
    return {
      title: `${this.$t('navbar.links.contacts')} | ${this.$t('seo.title')}`,

      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('p_contacts.subtitle')
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.$t('navbar.links.contacts')} | ${this.$t(
            'seo.title'
          )}`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$t('p_contacts.subtitle')
        }
      ]
    };
  },

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
  },

  methods: {
    sendForm() {
      this.$store.dispatch('sendForm', this);
    },

    sendTelMetriks(action) {
      this.$metrika.reachGoal(action);
      this.$gtag.event('zvonok', {
        event_category: 'click',
        event_action: action
      });
    }
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
