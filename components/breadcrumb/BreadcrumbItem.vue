<template>
  <li :class="['breadcrumb-item', { long: long }]">
    <nuxt-link :to="to">
      <slot>{{ title }}</slot>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  name: 'BreadcrumbItem',

  props: {
    to: {
      type: String,
      default: 'index'
    },

    title: {
      type: String,
      default: ''
    },

    long: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.breadcrumb-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  padding: 0 25px;
  font-weight: 600;
  background-color: $color-white;
  border-radius: 15px;
  box-shadow: 0 0 20px 0 rgba(161, 168, 194, 0.2);
  cursor: pointer;
  transition: all 0.2 $base-easing;

  @media (max-width: $md) {
    padding: 0 15px;
  }

  @media (max-width: $sm) {
    padding: 0 15px;
    height: 25px;
  }

  a {
    font-size: 12px;
    color: #b4b8c4;
    text-transform: uppercase;
    transition: all 0.2 $base-easing;

    @media (max-width: $sm) {
      font-size: 12px;
    }
  }

  &:not(:first-of-type) {
    padding-left: 45px;
    margin-left: -20px;

    @media (max-width: $md) {
      padding-left: 35px;
    }

    @media (max-width: $sm) {
      padding-left: 30px;
    }
  }

  &:last-of-type {
    background-color: $color-blue;
    cursor: default;

    &.long {
      @media (max-width: $sm) {
        margin-top: 5px;
        margin-left: 0;
        flex-basis: 200px;
        padding-left: 15px;
      }
    }

    a {
      color: $color-white;
      cursor: default;
    }
  }
}
</style>
