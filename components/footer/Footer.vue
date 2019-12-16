<template>
  <footer class="footer">
    <container>
      <div class="footer-top">
        <a-row :gutter="{ md: 20 }" type="flex">
          <a-col
            :lg="{ offset: 2, span: 6 }"
            :md="{ offset: 1, order: 1, span: 7 }"
            :xs="{ order: 3, offset: 1, span: 11 }"
            data-aos="fade"
            data-aos-delay="200"
          >
            <div class="footer-list">
              <h3 class="footer-list-title">
                {{ $t('footer.about_us') }}
              </h3>

              <ul>
                <li>
                  <nuxt-link :to="localePath('about')">
                    {{ $t('navbar.links.about') }}
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localePath('partners')">
                    {{ $t('navbar.links.partners') }}
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localePath('jobs')">
                    {{ $t('navbar.links.jobs') }}
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localePath('contacts')">
                    {{ $t('navbar.links.contacts') }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </a-col>
          <a-col
            :md="{ order: 2, span: 8 }"
            :xs="{ order: 1, span: 24 }"
            data-aos="fade"
            data-aos-delay="400"
          >
            <div class="footer-list center">
              <logo></logo>

              <div>
                <h3 class="footer-list-title">{{ $t('footer.contacts') }}</h3>

                <ul>
                  <li>
                    <action-link scheme="tel" href="+375225745556">
                      <svg-icon slot="icon" name="Tel" />
                      +375 (225) 74 55 56
                    </action-link>
                  </li>
                  <li>
                    <action-link scheme="tel" href="+375225786767">
                      <svg-icon slot="icon" name="Tel" />
                      +375 (225) 78 67 67
                    </action-link>
                  </li>
                  <li>
                    <h3 class="footer-list-title small">
                      {{ $t('p_contacts.title_second') }}<br />
                      {{ $t('p_contacts.subtitle_second') }}
                    </h3>
                  </li>
                  <li>
                    <action-link scheme="tel" href="+74959751214">
                      <svg-icon slot="icon" name="Tel" />
                      +7 (495) 975 12 14
                    </action-link>
                  </li>
                  <li>
                    <action-link scheme="tel" href="+74956404886">
                      <svg-icon slot="icon" name="Tel" />
                      +7 (495) 640 48 86
                    </action-link>
                  </li>
                  <li>
                    <action-link scheme="tel" href="+79206616576">
                      <svg-icon slot="icon" name="Tel" />
                      +7 (920) 661 65 76
                    </action-link>
                  </li>
                  <li>
                    <action-link scheme="mailto" href="info@avroraplast.ru">
                      <svg-icon slot="icon" name="Mail" />
                      info@avroraplast.ru
                    </action-link>
                  </li>
                </ul>
              </div>
            </div>
          </a-col>
          <a-col
            :lg="{ offset: 2, span: 6 }"
            :md="{ offset: 1, order: 3, span: 7 }"
            :xs="{ order: 3, offset: 1, span: 11 }"
            data-aos="fade"
            data-aos-delay="600"
          >
            <div class="footer-list">
              <h3 class="footer-list-title">
                {{ $t('footer.production') }}
              </h3>

              <ul>
                <li>
                  <nuxt-link :to="localePath('products')">
                    {{ $t('navbar.links.products') }}
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localePath('component_parts')">
                    {{ $t('navbar.links.component_parts') }}
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localePath('suppliers')">
                    {{ $t('navbar.links.suppliers') }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </a-col>
        </a-row>
      </div>

      <div class="footer-bottom">
        <span class="copyright">
          {{
            `&copy; ${new Date().getFullYear()}
            ${$t('footer.organization_name')}`
          }}
        </span>
        <span class="delimiter bullet">&bull;</span>
        <a href="https://maksis.by">
          {{ $t('footer.developer') }}
        </a>
      </div>
    </container>
  </footer>
</template>

<script>
import Container from '~/components/Container.vue';
import ActionLink from '~/components/baseComponents/ActionLink.vue';
import Logo from '~/components/Logo.vue';

export default {
  name: 'Footer',

  components: {
    Container,
    ActionLink,
    Logo
  }
};
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 90px;

  @media (max-width: $sm) {
    margin-top: 45px;
  }
}

.footer-top {
  width: 100%;
}

.footer-list {
  padding: 110px 0;

  @media (max-width: $xl) {
    padding: 90px 0;
  }

  ul {
    @include list-reset;
  }

  li {
    &:not(:last-of-type) {
      margin-bottom: 30px;

      @media (max-width: $lg) {
        margin-bottom: 20px;
      }
    }

    a:not(.action-link) {
      font-weight: 600;
      font-size: 20px;
      color: #000000;
      text-transform: uppercase;

      @media (max-width: $xl) {
        font-size: 16px;
      }

      @media (max-width: $lg) {
        font-size: 14px;
      }

      &:hover {
        color: $color-primary;
      }
    }

    .footer-list-title.small {
      font-size: 13px;
      font-weight: 400;
      max-width: 250px;
    }
  }

  &.center {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $color-white;
    border-radius: 20px;

    .logo {
      position: absolute;
      top: 0;
      left: 50%;
      width: 170px;
      transform: translate(-50%, -50%);

      @media (max-width: $xl) {
        width: 140px;
      }
    }
  }
}

.footer-list-title {
  margin-top: 0;
  margin-bottom: 30px;
  font-weight: 600;
  font-size: 20px;
  color: rgba(#000000, 0.5);

  @media (max-width: $lg) {
    margin-bottom: 20px;
    font-size: 18px;
  }
}

.footer-bottom {
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: $lg) {
    flex-direction: column;
  }

  span,
  a {
    font-size: 14px;
    color: $color-from-hell;
    line-height: 1;
    text-transform: uppercase;

    @media (max-width: $lg) {
      text-align: center;
    }
  }

  a {
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  .delimiter {
    margin: 0 20px;

    @media (max-width: $lg) {
      margin: 10px 0;
    }

    &.bullet {
      color: $color-primary;
    }
  }
}
</style>
