<template>
  <div class="application-form-row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ApplicationFormRow'
};
</script>

<style lang="scss" scoped>
.application-form-row {
  display: flex;

  @media (max-width: $sm) {
    flex-direction: column;
  }

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }

  .application-form-field {
    &:not(:last-of-type) {
      @media (max-width: $sm) {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
