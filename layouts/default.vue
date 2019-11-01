<template>
  <div class="root">
    <Navbar></Navbar>
    <nuxt />
  </div>
</template>

<script>
import Navbar from '~/components/navbar/Navbar.vue';

export default {
  components: {
    Navbar
  }
};
</script>

<style lang="scss"></style>
