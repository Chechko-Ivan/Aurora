<template>
  <nav :class="['navbar', { 'drawer-opend': drawerOpend }]">
    <div class="navbar-inner">
      <div class="navbar-logo" data-aos="fade" data-aos-delay="800">
        <Logo></Logo>
      </div>

      <ul class="navbar-list" data-aos="fade" data-aos-delay="900">
        <li>
          <NavbarLink :to="localePath('products')">
            {{ $t('navbar.links.products') }}
          </NavbarLink>
        </li>
        <li>
          <NavbarLink :to="localePath('partners')">
            {{ $t('navbar.links.partners') }}
          </NavbarLink>
        </li>
        <li>
          <NavbarLink :to="localePath('suppliers')">
            {{ $t('navbar.links.suppliers') }}
          </NavbarLink>
        </li>
        <li>
          <NavbarLink :to="localePath('contacts')">
            {{ $t('navbar.links.contacts') }}
          </NavbarLink>
        </li>
      </ul>

      <slot name="burger"></slot>
      <slot name="lang-switcher"></slot>
    </div>
  </nav>
</template>

<script>
import Logo from '~/components/Logo.vue';
import NavbarLink from '~/components/navbar/NavbarLink.vue';

export default {
  name: 'Navbar',

  components: {
    Logo,
    NavbarLink
  },

  props: {
    drawerOpend: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 125px;
  padding-left: 40px;
  z-index: $navbar-z-index;
  background-color: $body-bg;

  @media (max-width: $osx) {
    height: 105px;
    padding-left: 30px;
  }

  @media (max-width: $md) {
    height: 80px;
    padding-left: 25px;
  }

  @media (max-width: $sm) {
    height: 70px;
    padding-left: 15px;
  }

  &.drawer-opend {
    @media (max-width: $xl) {
      .navbar-list {
        display: none;
      }

      .burger {
        margin-left: auto;
      }
    }

    @media (max-width: $md) {
      padding-left: 0;

      .logo {
        width: 0;
        opacity: 0;
      }
    }
  }

  .logo {
    @media (max-width: $osx) {
      width: 150px;
    }

    @media (max-width: $md) {
      width: 110px;
    }

    @media (max-width: $sm) {
      width: 100px;
    }
  }

  .burger {
    @media (max-width: $lg) {
      margin-left: auto;
    }
  }
}

.navbar-inner {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}

.navbar-list {
  @include list-reset;
  display: flex;
  align-items: center;
  margin-right: 30px;
  margin-left: auto;

  @media (max-width: $osx) {
    margin-right: 15px;
  }

  @media (max-width: $lg) {
    display: none;
  }

  li {
    &:not(:last-of-type) {
      margin-right: 30px;

      @media (max-width: $osx) {
        margin-right: 15px;
      }
    }
  }
}
</style>
