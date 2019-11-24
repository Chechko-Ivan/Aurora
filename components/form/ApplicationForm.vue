<template>
  <form :class="['application-form', { small: small }]">
    <slot name="root"></slot>

    <div class="application-form-inner">
      <slot name="title"></slot>

      <div class="application-form-fields">
        <slot></slot>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'ApplicationForm',

  props: {
    small: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.application-form {
  position: relative;
  max-width: 900px;
  margin-right: auto;
  margin-left: auto;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 8px 20px 0 rgba(13, 28, 84, 0.25);

  &.small {
    .application-form-inner {
      padding-top: 45px;
      padding-bottom: 45px;

      @media (max-width: $sm) {
        padding-top: 35px;
        padding-bottom: 35px;
      }
    }
  }
}

.application-form-inner {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 60px 20px 70px 20px;

  @media (max-width: $sm) {
    padding-right: 15px;
    padding-left: 15px;
  }
}

.application-form-fields {
  width: 100%;
  max-width: 620px;
  margin-right: auto;
  margin-left: auto;
}
</style>
