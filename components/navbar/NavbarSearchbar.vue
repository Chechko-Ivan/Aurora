<template>
  <div class="navbar-searchbar">
    <svg-icon name="Search" />
    <input
      v-bind="$attrs"
      v-on="$listeners"
      @input="$emit('update', $event.target.value)"
      :placeholder="$t('navbar.search_bar.input_placeholder')"
      type="text"
    />
  </div>
</template>

<script>
export default {
  name: 'NavbarSearchbar',
  inheritAttrs: false,
  model: {
    event: 'update'
  }
};
</script>

<style lang="scss" scoped>
.navbar-searchbar {
  position: relative;
  width: 100%;

  svg.icon {
    position: absolute;
    top: 50%;
    left: 3px;
    width: 17.5px;
    height: 17.5px;
    fill: $color-white;
    transform: translateY(-50%);

    @media (max-width: $sm) {
      width: 15px;
      height: 15px;
    }
  }

  input {
    box-sizing: border-box;
    width: 100%;
    height: 30px;
    padding: 0 10px 0 30px;
    font-size: 16px;
    background-color: transparent;
    border: 0;
    color: $color-white;
    border-bottom: 1px solid $color-white;

    &::placeholder {
      color: rgba($color-white, 0.5);
    }
  }
}
</style>
