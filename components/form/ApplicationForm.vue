<template>
  <form :class="['application-form', { small: small, accent: accent }]">
    <span class="circle solid first"></span>
    <span class="circle solid second"></span>
    <span class="circle dashed third"></span>

    <slot name="root"></slot>

    <div class="application-form-inner">
      <div class="application-form-title">
        <slot name="title"></slot>
      </div>

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
    },

    accent: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
.application-form {
  position: relative;
  max-width: 900px;
  margin-right: auto;
  margin-left: auto;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 8px 20px 0 rgba(13, 28, 84, 0.25);

  @media (max-width: $sm) {
    border-radius: 8px;
  }

  &.small {
    border-radius: 8px;

    .application-form-inner {
      padding-top: 45px;
      padding-bottom: 45px;

      @media (max-width: $sm) {
        padding-top: 30px;
        padding-bottom: 30px;
      }
    }
  }

  &.accent {
    background-color: $color-primary;

    .application-form-field {
      input {
        background-color: $color-white;
      }
    }

    .application-form-textarea {
      background-color: $color-white;
    }

    .application-form-title {
      margin-bottom: 30px;

      h1,
      h2,
      h3,
      h4 {
        color: $color-white;
      }
    }

    .circle {
      z-index: 0;
      display: block;
    }
  }

  .circle {
    position: absolute;
    z-index: 0;
    display: none;
    box-sizing: border-box;
    border-radius: 50%;

    &.solid {
      border: 5px solid $color-light-blue;
      box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.1);
    }

    &.dashed {
      border: 5px dotted rgba(255, 255, 255, 0.25);
    }

    &.first {
      top: 90px;
      left: 45px;
      width: 60px;
      height: 60px;

      @media (max-width: $sm) {
        top: 70px;
        left: 25px;
        width: 40px;
        height: 40px;
      }
    }

    &.second {
      top: 10px;
      right: 55px;
      width: 90px;
      height: 90px;
      border-width: 10px;
      box-shadow: 0 7px 8px 0 rgba(0, 0, 0, 0.08);

      @media (max-width: $sm) {
        top: 10px;
        right: 10px;
        width: 50px;
        height: 50px;
        border-width: 5px;
      }
    }

    &.third {
      top: -30px;
      right: 15px;
      width: 345px;
      height: 345px;
      animation-name: rotate;
      animation-duration: 60s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
  }
}

.application-form-inner {
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 60px 20px 70px 20px;

  @media (max-width: $sm) {
    padding: 30px 15px;
  }
}

.application-form-title {
  text-align: center;
}

.application-form-fields {
  width: 100%;
  max-width: 620px;
  margin-right: auto;
  margin-left: auto;
}
</style>
