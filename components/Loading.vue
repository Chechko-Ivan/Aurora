<template>
  <div v-if="loading" class="loading">
    <div class="loading-inner">
      <div class="loading-progress">100%</div>
      <div class="loading-progress-bar">
        <img
          v-for="(icon, index) in 10"
          :key="index"
          :class="'active'"
          src="~/static/images/LogoIcon.svg"
          alt="Логотип"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',

  data: () => ({
    loading: false,
    progress: 0
  }),

  mounted() {
    const interval = setInterval(() => {
      if (this.progress === 100) {
        clearInterval(interval);
        return;
      }

      this.progress += 10;
    }, 5000 / 10);

    this.$once('hook:beforeDestroy', () => {
      clearInterval(interval);
    });
  },

  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    }
  }
};
</script>

<style lang="scss" scoped>
$loading-bg: $color-white;

.loading {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: $loading-bg;
}

.loading-inner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 100%;
  margin-left: 40px;
}

.loading-progress {
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  color: $color-black;
}

.loading-progress-bar {
  display: flex;
  width: 100%;

  img {
    width: calc(10% - 10px);
    filter: grayscale(100%);
    transition: filter 0.25s $base-easing;

    &.active {
      filter: grayscale(0%);
    }

    &:not(:last-of-type) {
      margin-right: 10px;
    }
  }
}
</style>
