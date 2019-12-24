<template>
  <div class="page page-suppliers">
    <div class="dot dark-blue first" data-aos="fade" data-aos-delay="200"></div>
    <div
      class="dot light-orange second"
      data-aos="fade"
      data-aos-delay="400"
    ></div>
    <round-animation data-aos="fade" data-aos-delay="600">
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
            <h1 class="title-h1" data-aos="fade" data-aos-delay="200">
              {{ $t('p_suppliers.header.title') }}
            </h1>
          </a-col>

          <a-col :xl="{ offset: 2, span: 14 }">
            <p class="text-xxxl" data-aos="fade" data-aos-delay="400">
              {{ $t('p_suppliers.header.text') }}
            </p>
          </a-col>
        </a-row>
      </container>
    </header>

    <section class="s-suppliers-content">
      <container>
        <a-row :gutter="20">
          <a-col :xl="{ offset: 2, span: 20 }">
            <p
              class="text-xxxl text-black"
              data-aos="fade"
              data-aos-delay="400"
            >
              {{ $t('p_suppliers.content.title') }}
            </p>

            <div
              class="s-suppliers-content-list-title text-xxl"
              data-aos="fade"
              data-aos-delay="600"
            >
              {{ $t('p_suppliers.content.subtitle') }}
            </div>
            <ul
              class="s-suppliers-content-list list-style-dots"
              data-aos="fade"
              data-aos-delay="600"
            >
              <li
                v-for="(item, index) in $t('p_suppliers.content.list')"
                :key="index"
              >
                {{ item }}
              </li>
            </ul>
            <div class="link-wrapper">
              <base-nuxt-link
                :to="localePath('contacts')"
                data-aos="zoom-out"
                data-aos-delay="200"
              >
                {{ $t('p_home.suppliers_link') }}
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
import BaseButton from '~/components/baseComponents/BaseButton.vue';
import BaseNuxtLink from '~/components/baseComponents/BaseNuxtLink.vue';
import ApplicationForm from '~/components/form/ApplicationForm.vue';
import ApplicationFormRow from '~/components/form/ApplicationFormRow.vue';
import ApplicationFormField from '~/components/form/ApplicationFormField.vue';
import ApplicationFormTextarea from '~/components/form/ApplicationFormTextarea.vue';

export default {
  head() {
    return {
      title: `${this.$t('navbar.links.suppliers')} | ${this.$t('seo.title')}`,

      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('p_suppliers.header.text')
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.$t('navbar.links.suppliers')} | ${this.$t(
            'seo.title'
          )}`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$t('p_suppliers.header.text')
        }
      ]
    };
  },

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
  },

  methods: {
    sendForm() {
      this.$store.dispatch('sendForm', this);
    }
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
