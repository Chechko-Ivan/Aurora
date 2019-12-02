<template>
  <div class="page page-about">
    <div class="dot dark-blue first"></div>
    <div class="dot light-orange second"></div>

    <div class="round-animation-first">
      <round-animation>
        <round-animation-circle class="round-animation-first">
          <round-animation-circle class="round-animation-second">
            <round-animation-circle class="round-animation-third">
              <round-animation-inner
                :style="`background-image: url(${RoundImage1});`"
              ></round-animation-inner>
            </round-animation-circle>
          </round-animation-circle>
        </round-animation-circle>
      </round-animation>
    </div>

    <header class="page-about-header">
      <container>
        <a-row :gutter="20">
          <a-col :xl="{ offset: 2, span: 14 }">
            <h1 class="title-h1">{{ $t('p_about.title') }}</h1>

            <p class="text-xxxl">
              Чтобы достичь результатов и доверия наших клиентов, мы должны
              работать в команде, уважать друг друга, выполнять обещания и
              постоянно совершенствоваться
            </p>
          </a-col>
        </a-row>
      </container>
    </header>
  </div>
</template>

<script>
import Container from '@/components/Container.vue';
import RoundAnimation from '@/components/roundAnimation/RoundAnimation.vue';
import RoundAnimationCircle from '@/components/roundAnimation/RoundAnimationCircle.vue';
import RoundAnimationInner from '@/components/roundAnimation/RoundAnimationInner.vue';

import RoundImage1 from '@/static/images/designPicture/designPicture1.jpg';

export default {
  components: {
    Container,
    RoundAnimation,
    RoundAnimationCircle,
    RoundAnimationInner
  },

  data() {
    return {
      RoundImage1
    };
  }
};
</script>

<style lang="scss" scoped>
.page-about {
  position: relative;
  padding-top: 90px;

  &.dot {
    position: absolute;

    &.first {
      top: 100px;
      right: 20%;
      width: 95px;
      height: 95px;
    }
  }
}

.round-animation-first {
  position: absolute;
  top: -10%;
  right: 10%;

  .round-animation {
    width: 400px;
    height: 400px;
  }

  .round-animation-circle {
    padding: 30px;
  }
}

.page-about-header {
  h1 {
    margin-bottom: 40px;
  }
}
</style>
