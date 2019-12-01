<template>
  <footer class="footer">
    <container>
      <div class="footer-top">
        <a-row :gutter="{ md: 20 }" type="flex">
          <a-col
            :lg="{ offset: 2, span: 6 }"
            :md="{ offset: 1, order: 1, span: 7 }"
            :xs="{ order: 3, offset: 1, span: 11 }"
          >
            <div class="footer-list">
              <h3 class="footer-list-title">О нас</h3>

              <ul>
                <li>
                  <nuxt-link :to="localePath('about')">О компании</nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localePath('partners')">Партнерам</nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localePath('jobs')"
                    >Работа в Аврорапласт</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link :to="localePath('contacts')">Контакты</nuxt-link>
                </li>
              </ul>
            </div>
          </a-col>
          <a-col :md="{ order: 2, span: 8 }" :xs="{ order: 1, span: 24 }">
            <div class="footer-list center">
              <logo></logo>

              <div>
                <h3 class="footer-list-title">Контакты</h3>

                <ul>
                  <li>
                    <action-link scheme="tel" href="+375225485556">
                      <svg-icon slot="icon" name="Tel" />
                      +375 (225) 48 55 56
                    </action-link>
                  </li>
                  <li>
                    <action-link scheme="tel" href="+375225496767">
                      <svg-icon slot="icon" name="Tel" />
                      +375 (225) 49 67 67
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
          >
            <div class="footer-list">
              <h3 class="footer-list-title">Производство</h3>

              <ul>
                <li>
                  <nuxt-link :to="localePath('products')">Продукция</nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localePath('component_parts')">
                    Комплектующие на заказ
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localePath('suppliers')"
                    >Поставщикам</nuxt-link
                  >
                </li>
              </ul>
            </div>
          </a-col>
        </a-row>
      </div>

      <div class="footer-bottom">
        <span class="copyright">
          {{ `&copy; ${new Date().getFullYear()} ООО «Секвойя»` }}
        </span>
        <!-- <span class="delimiter">|</span>
        <a href="/">
          Политика обработки персональных данных
        </a> -->
        <span class="delimiter bullet">&bull;</span>
        <a href="https://maksis.by">
          Разработано студией Maksis
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
  }

  &.center {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $color-white;

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
