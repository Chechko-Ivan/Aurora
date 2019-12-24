<template>
  <a-drawer
    :visible="opened"
    :closable="false"
    :z-index="9"
    wrap-class-name="navbar-drawer"
  >
    <navbar-searchbar></navbar-searchbar>

    <ul class="navbar-drawer-list">
      <li>
        <navbar-link :to="localePath('products')">
          {{ $t('navbar.links.products') }}
        </navbar-link>
      </li>
      <li>
        <navbar-link :to="localePath('partners')">
          {{ $t('navbar.links.partners') }}
        </navbar-link>
      </li>
      <li>
        <navbar-link :to="localePath('suppliers')">
          {{ $t('navbar.links.suppliers') }}
        </navbar-link>
      </li>
      <li>
        <navbar-link :to="localePath('contacts')">
          {{ $t('navbar.links.contacts') }}
        </navbar-link>
      </li>
      <li>
        <navbar-link :to="localePath('about')">
          {{ $t('navbar.links.about') }}
        </navbar-link>
      </li>
      <li v-if="$store.state.location === 'Belarus'">
        <navbar-link :to="localePath('jobs')">
          {{ $t('navbar.links.jobs') }}
        </navbar-link>
      </li>
      <li>
        <navbar-link :to="localePath('component_parts')">
          {{ $t('navbar.links.component_parts') }}
        </navbar-link>
      </li>
    </ul>

    <div class="navbar-drawer-contact">
      <ul class="navbar-drawer-contact-list">
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
  </a-drawer>
</template>

<script>
import NavbarLink from '~/components/navbar/NavbarLink.vue';
import NavbarSearchbar from '~/components/navbar/NavbarSearchbar.vue';
import ActionLink from '~/components/baseComponents/ActionLink.vue';

export default {
  name: 'NavbarDrawer',

  components: {
    NavbarLink,
    NavbarSearchbar,
    ActionLink
  },

  props: {
    opened: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
.ant-drawer.navbar-drawer {
  top: auto;
  bottom: 0;
  height: calc(100% - 125px);

  @media (max-width: $osx) {
    height: calc(100% - 105px);
  }

  @media (max-width: $md) {
    height: calc(100% - 80px);
  }

  @media (max-width: $sm) {
    height: calc(100% - 70px);
  }

  &.ant-drawer-open {
    .ant-drawer-content-wrapper {
      box-shadow: none;
      transform: translateX(0) !important;
      transition-delay: 0.2s;
    }
  }

  .ant-drawer-mask {
    display: none;
  }

  .ant-drawer-content-wrapper {
    right: 152.84px;
    width: 395px !important;
    height: calc(100% - 105px);
    box-shadow: none;
    transform: translateX(calc(100% + 160px)) !important;
    transition: all 0.25s cubic-bezier(0.9, 0, 0.3, 0.7);
    transition-delay: 0s;

    @media (max-width: $osx) {
      right: 125.88px;
      width: 345px !important;
      transform: translateX(calc(100% + 130px)) !important;
    }

    @media (max-width: $xl) {
      width: 395px !important;
    }

    @media (max-width: $md) {
      right: 115.88px;
      width: calc(100% - 115.88px) !important;
      height: calc(100% - 80px);
      transform: translateX(calc(100% + 120px)) !important;
    }

    @media (max-width: $sm) {
      right: 87.39px;
      width: calc(100% - 87.39px) !important;
      height: calc(100% - 70px);
      transform: translateX(calc(100% + 90px)) !important;
    }
  }

  .ant-drawer-content {
    background-color: $color-orange;
  }

  .ant-drawer-body {
    display: flex;
    height: calc(100% - 40px) !important;
    flex-direction: column;
    padding: 0 40px 40px 40px;

    @media (max-width: $lg) {
      height: auto !important;
    }

    @media (max-height: 815px) {
      height: auto !important;
    }

    @media (max-width: $sm) {
      padding: 20px;
    }
  }
}

.navbar-drawer-list {
  @include list-reset;
  margin-top: 80px;
  margin-bottom: 40px;

  @media (max-width: $sm) {
    margin-top: 40px;
  }

  li {
    &:nth-child(-n + 4) {
      display: none;

      @media (max-width: $lg) {
        display: block;
      }
    }

    &:not(:last-of-type) {
      margin-bottom: 40px;

      @media (max-width: $sm) {
        margin-bottom: 20px;
      }
    }
  }

  .navbar-link {
    color: $color-white;

    @media (max-width: $sm) {
      font-size: 14px;
    }

    &:hover,
    &:focus {
      color: rgba($color-white, 0.75);
    }
  }
}

.navbar-drawer-contact {
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 15px 15px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 8px 20px 0 rgba(13, 28, 84, 0.25);
}

.navbar-drawer-contact-list {
  @include list-reset;

  li {
    &:not(:last-of-type) {
      margin-bottom: 25px;

      @media (max-width: $sm) {
        margin-bottom: 15px;
      }
    }
  }

  .action-link {
    font-weight: 400 !important;
  }
}
</style>
