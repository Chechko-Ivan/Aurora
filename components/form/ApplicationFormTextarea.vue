<template>
  <textarea
    :class="['application-form-textarea', { error: error }]"
    v-bind="$attrs"
    v-on="$listeners"
    @input="$emit('update', $event.target.value)"
  ></textarea>
</template>

<script>
export default {
  name: 'ApplicationFormTextarea',

  inheritAttrs: false,

  props: {
    error: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.application-form-textarea {
  resize: none;
  width: 100%;
  padding: 20px 15px 0 20px;
  height: 150px;
  background: #ebeffc;
  border: 1px solid #cfd4e9;
  border-radius: 6px;
  font-size: 18px;
  font-family: inherit;
  color: #000000;
  transition: all 0.25s ease;
  box-sizing: border-box;

  &::placeholder {
    color: #a1a8c2;
  }

  &:focus {
    box-shadow: inset 0 3px 2px 0 rgba(9, 20, 60, 0.25);
  }

  &.error {
    border: 2px solid #f85352;
  }
}
</style>
