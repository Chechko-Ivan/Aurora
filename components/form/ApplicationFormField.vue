<template>
  <div :class="['application-form-field', { error: error }]">
    <slot name="root"></slot>

    <input
      :type="type"
      v-bind="$attrs"
      v-on="$listeners"
      @input="$emit('update', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'ApplicationFormField',
  inheritAttrs: false,
  model: {
    event: 'update'
  },
  props: {
    type: {
      type: String,
      default: 'text',
      validator(val) {
        return ['email', 'number', 'password', 'tel', 'text', 'url'].includes(
          val
        );
      }
    },

    error: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
$bg: $color-lighten-blue;
$border-color: $color-light-blue;
$border-color-error: #f85352;

.application-form-field {
  position: relative;
  width: 100%;

  &:not(:last-of-type) {
    margin-right: 20px;
  }

  &.error {
    input {
      border: 2px solid $border-color-error;
    }
  }

  input {
    box-sizing: border-box;
    width: 100%;
    height: 60px;
    padding: 0 15px 0 20px;
    font-size: 18px;
    color: $color-black;
    background: $bg;
    border: 1px solid $border-color;
    border-radius: 6px;
    transition: all 0.25s $base-easing;

    &::placeholder {
      color: #a1a8c2;
    }

    &:focus {
      box-shadow: inset 0 3px 2px 0 rgba(9, 20, 60, 0.25);
    }
  }

  .base-button {
    position: absolute;
    top: 50%;
    right: 4px;
    transform: translateY(-50%);
  }
}
</style>
