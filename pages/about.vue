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
                :style="`background-image: url(${designPicture1});`"
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

            <div class="link-wrapper">
              <div
                :style="`background-image: url(${designPicture2});`"
                class="page-about-header-image"
              ></div>
              <div class="link-wrapper-inner">
                <base-nuxt-link :to="localePath('jobs')">
                  <svg-icon slot="icon-before" name="SearchPeople" />
                  Работа в аврорапласт
                </base-nuxt-link>

                <base-nuxt-link :to="localePath('contacts')">
                  <svg-icon slot="icon-before" name="UserInfo" />
                  Контакты
                </base-nuxt-link>
              </div>
            </div>
          </a-col>
        </a-row>
      </container>
    </header>

    <section class="s-page-about-advantages">
      <img
        src="~/static/images/DashedCircle.png"
        alt="DashedCircle"
        class="s-page-about-advantages-image"
      />
      <container>
        <a-row :gutter="20">
          <a-col :xl="{ offset: 2, span: 20 }">
            <h2 class="title-h2">
              Аврорапласт является крупнейшим производителем изделий из ПВХ в
              Беларуси уже более <b class="text-accent">15</b> лет.
            </h2>
            <div class="s-page-about-advantages-message">
              <svg-icon slot="icon-before" name="Info" />
              <p class="text-xxxl">
                С момента создания компании мы сделали ставку на такие аспекты,
                как:
              </p>
            </div>

            <div class="s-page-about-advantages-items">
              <div class="s-page-about-advantages-item">
                <img src="../static/images/Plant.svg" alt="Icon" />
                <p class="text-xxl text-black">
                  Производство качественной продукции отвечающей всем
                  требованиям заказчика
                </p>
              </div>

              <div class="s-page-about-advantages-item">
                <img src="../static/images/Gears.svg" alt="Icon" />
                <p class="text-xxl text-black">
                  Современный технический уровень оснащения предприятия,
                  квалифицированный персонал, высокая культура и организация
                  производства.
                </p>
              </div>
            </div>
          </a-col>
        </a-row>
      </container>
    </section>

    <section :style="`background-image: url(${VideoPreview});`" class="s-video">
      <div class="s-video-informer">
        <span class="s-video-informer-subtitle">
          Основное направление деятельности компании
        </span>
        <h2 class="s-video-informer-title">производство изделий из ПВХ</h2>
      </div>
    </section>

    <section class="s-products">
      <container>
        <a-row :gutter="20">
          <a-col :span="24">
            <div class="s-title center">
              <h2>Наши продукты</h2>
            </div>
          </a-col>
        </a-row>

        <a-row :gutter="20">
          <a-col
            v-for="(product, index) in $t('products')"
            :key="index"
            :lg="{ span: 8 }"
            :sm="{ span: 12 }"
            class="s-products-col"
          >
            <product-card
              :to="
                localePath({
                  path: `/products/${product.link}`
                })
              "
              :title="product.title"
              :image-src="`images/contentImage/${product.summary.summaryImage}`"
              :text="product.summary.summaryText"
              :list-items="product.summary.summaryList"
            ></product-card>
          </a-col>
        </a-row>
      </container>
    </section>

    <adventages>
      <h2 slot="title" class="title-h2 text-light">
        {{ $t('p_partners.advantages.title') }}
      </h2>

      <container>
        <a-row :gutter="20">
          <a-col :lg="{ offset: 2, span: 6 }" :md="{ span: 8 }">
            <adventages-item :iconSrc="MarkSettings">
              {{ $t('p_partners.advantages[1]') }}
            </adventages-item>
          </a-col>

          <a-col :lg="{ span: 8 }" :md="{ span: 8 }">
            <adventages-item :iconSrc="CubeMolecule">
              {{ $t('p_partners.advantages[2]') }}
            </adventages-item>
          </a-col>

          <a-col :lg="{ span: 6 }" :md="{ span: 8 }">
            <adventages-item :iconSrc="Roket">
              {{ $t('p_partners.advantages[3]') }}
            </adventages-item>
          </a-col>
        </a-row>

        <a-row :gutter="20">
          <a-col :lg="{ offset: 2, span: 6 }" :md="{ span: 8 }">
            <adventages-item :iconSrc="Hearth">
              {{ $t('p_partners.advantages[4]') }}
            </adventages-item>
          </a-col>

          <a-col :lg="{ span: 8 }" :md="{ span: 8 }">
            <adventages-item :iconSrc="Social">
              {{ $t('p_partners.advantages[5]') }}
            </adventages-item>
          </a-col>

          <a-col :lg="{ span: 6 }" :md="{ span: 8 }">
            <adventages-item :iconSrc="Defend">
              {{ $t('p_partners.advantages[6]') }}
            </adventages-item>
          </a-col>
        </a-row>
      </container>
    </adventages>

    <div class="page-about-bottom-message">
      <container>
        <a-row :gutter="20">
          <a-col :xl="{ offset: 2, span: 20 }">
            <p class="text-xxxl text-black">
              Аврорапласт остается надёжным партнёром и поставщиком
              конкурентоспособной продукции для обеспечения бесперебойной
              работы. В своей деятельности наша компания ориентирована на
              производство качественной продукции отвечающей всем требованиям
              заказчика.
            </p>
            <h2>
              С надеждой на взаимовыгодное
              <b class="text-accent">сотрудничество!</b>
            </h2>
          </a-col>
        </a-row>
      </container>
    </div>
  </div>
</template>

<script>
import Container from '~/components/Container.vue';
import ProductCard from '~/components/productCard/ProductCard.vue';
import RoundAnimation from '~/components/roundAnimation/RoundAnimation.vue';
import RoundAnimationCircle from '~/components/roundAnimation/RoundAnimationCircle.vue';
import RoundAnimationInner from '~/components/roundAnimation/RoundAnimationInner.vue';
import BaseNuxtLink from '~/components/baseComponents/BaseNuxtLink.vue';
import Adventages from '~/components/adventages/Adventages.vue';
import AdventagesItem from '~/components/adventages/AdventagesItem.vue';

import designPicture1 from '~/static/images/designPicture/designPicture1.jpg';
import designPicture2 from '~/static/images/designPicture/designPicture2.jpg';
import VideoPreview from '~/static/images/PageAboutVideoPreview.jpg';
import MarkSettings from '~/static/images/MarkSettings.svg';
import CubeMolecule from '~/static/images/CubeMolecule.svg';
import Roket from '~/static/images/Roket.svg';
import Hearth from '~/static/images/Hearth.svg';
import Social from '~/static/images/Social.svg';
import Defend from '~/static/images/Defend.svg';

export default {
  components: {
    Container,
    ProductCard,
    RoundAnimation,
    RoundAnimationCircle,
    RoundAnimationInner,
    BaseNuxtLink,
    Adventages,
    AdventagesItem
  },

  data() {
    return {
      designPicture1,
      designPicture2,
      VideoPreview,
      MarkSettings,
      CubeMolecule,
      Roket,
      Hearth,
      Social,
      Defend
    };
  },

  mounted() {
    this.productCardNodeList = document.querySelectorAll('.product-card');
    this.calculateProductCardHeight();

    this.$nextTick().then(() => {
      window.addEventListener('resize', this.resizeHandler);
    });
  },

  methods: {
    resizeHandler() {
      this.calculateProductCardHeight();
    },

    calculateProductCardHeight() {
      let maxHeight = 0;

      for (const node of this.productCardNodeList) {
        const nodeHeight = node.clientHeight;

        if (nodeHeight > maxHeight) {
          maxHeight = nodeHeight;

          for (const node of this.productCardNodeList) {
            node.style.height = `${nodeHeight}px`;
          }
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.page-about {
  position: relative;
  padding-top: 90px;

  .dot {
    position: absolute;

    &.first {
      top: 500px;
      right: 37%;
      width: 95px;
      height: 95px;

      @media (max-width: $md) {
        top: 450px;
        right: 20%;
      }
    }

    &.second {
      top: -3%;
      right: 57%;
      width: 95px;
      height: 95px;

      @media (max-width: $md) {
        top: -2%;
        right: 20%;
      }

      @media (max-width: $sm) {
        top: -1%;
      }
    }
  }

  .link-wrapper-inner {
    display: flex;

    @media (max-width: $md) {
      margin-bottom: 30px;
    }

    @media (max-width: $sm) {
      flex-direction: column;
    }
  }

  .s-products {
    .s-title {
      margin-top: 120px;
      margin-bottom: 60px;

      @media (max-width: $sm) {
        margin: 60px;
        margin-bottom: 30px;
      }
    }
  }

  .s-products-col {
    &:nth-child(n + 4) {
      margin-top: 50px;

      @media (max-width: $xl) {
        margin-top: 40px;
      }
    }

    @media (max-width: $lg) {
      &:nth-child(n + 3) {
        margin-top: 40px;
      }
    }

    @media (max-width: $sm) {
      &:not(:first-of-type) {
        margin-top: 120px;
      }
    }
  }

  .adventages {
    margin-top: 120px;

    @media (max-width: $sm) {
      margin-top: 60px;
    }

    .ant-row {
      &:not(:last-of-type) {
        margin-bottom: 60px;

        @media (max-width: $md) {
          margin-bottom: 40px;
        }
      }

      div[class^='ant-col'] {
        &:not(:last-of-type) {
          @media (max-width: $md) {
            margin-bottom: 40px;
          }
        }
      }
    }
  }
}

.round-animation-first {
  position: absolute;
  top: -4%;
  right: 5%;

  @media (max-width: $xl) {
    top: -7%;
    right: 5%;
  }

  @media (max-width: $md) {
    display: none;
  }

  .round-animation {
    width: 400px;
    height: 400px;

    @media (max-width: $xl) {
      width: 350px;
      height: 350px;
    }
  }

  .round-animation-circle {
    padding: 35px;

    @media (max-width: $xl) {
      padding: 30px;
    }
  }
}

.page-about-header {
  margin-bottom: 100px;

  @media (max-width: $xl) {
    margin-bottom: 70px;
  }

  @media (max-width: $sm) {
    margin-bottom: 20px;
  }

  h1 {
    margin-bottom: 40px;
  }

  p.text-xxxl {
    text-align: justify;
  }

  .link-wrapper {
    justify-content: space-between;
    margin-top: 40px;

    @media (max-width: $md) {
      flex-direction: column-reverse;
    }
  }
}

.page-about-header-image {
  width: 210px;
  height: 210px;
  margin-right: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
}

.s-page-about-advantages {
  position: relative;
  padding: 120px 0;
  overflow: hidden;

  @media (max-width: $osx) {
    padding: 100px 0;
  }

  h2.title-h2 {
    text-align: center;

    @media (max-width: $sm) {
      font-size: 25px;
    }
  }
}

.s-page-about-advantages-image {
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(35%);
}

.s-page-about-advantages-message {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 895px;
  margin: 40px auto 60px;
  padding: 22px 40px;
  background: #ffffff;
  border-radius: 37.5px;
  box-shadow: 0 0 20px 0 rgba(161, 168, 194, 0.2);

  @media (max-width: $xl) {
    width: auto;
  }

  @media (max-width: $sm) {
    padding: 15px 20px;
  }

  p.text-xxxl {
    margin: 0;

    @media (max-width: $sm) {
      font-size: 16px;
    }
  }

  .icon {
    width: 20px;
    height: 20px;
    margin-right: 20px;
    fill: #a1a8c2;
    flex-shrink: 0;

    @media (max-width: $xl) {
      margin-right: 15px;
    }
  }
}

.s-page-about-advantages-items {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.s-page-about-advantages-item {
  display: flex;
  align-items: center;

  &:last-of-type {
    margin-top: 60px;
    margin-right: -200px;

    @media (max-width: $md) {
      margin-right: 0;
    }

    p {
      max-width: 450px;
    }
  }

  img {
    width: 80px;
    margin-right: 30px;

    @media (max-width: $xl) {
      width: 60px;
    }

    @media (max-width: $xl) {
      margin-right: 20px;
    }
  }

  p {
    max-width: 390px;
    margin: 0;
    font-weight: 600;

    @media (max-width: $xl) {
      font-size: 16px;
    }

    @media (max-width: $sm) {
      font-size: 14px;
    }
  }
}

.s-video {
  position: relative;
  width: 100%;
  height: 100vh;
  max-height: 750px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: $xl) {
    max-height: 550px;
  }
}

.s-video-informer {
  position: absolute;
  right: 0;
  bottom: 0;
  box-sizing: border-box;
  width: 50%;
  padding: 80px 30px 80px 60px;
  background-color: $color-primary;

  @media (max-width: $xl) {
    padding: 50px 20px 50px 40px;
  }

  @media (max-width: $md) {
    width: 60%;
    padding: 40px 10px 40px 20px;
  }
}

.s-video-informer-subtitle {
  font-weight: 600;
  font-size: 20px;
  color: $color-white;

  @media (max-width: $xl) {
    font-size: 16px;
  }

  @media (max-width: $md) {
    font-size: 14px;
  }
}

.s-video-informer-title {
  font-weight: 600;
  font-size: 40px;
  font-family: 'Source Sans Pro', $sans-serif;
  color: $color-white;

  @media (max-width: $osx) {
    font-size: 35px;
  }

  @media (max-width: $xl) {
    font-size: 30px;
  }

  @media (max-width: $md) {
    font-size: 20px;
  }
}

.page-about-bottom-message {
  text-align: center;
  padding: 80px 0 180px;

  @media (max-width: $osx) {
    padding-bottom: 120px;
  }

  @media (max-width: $lg) {
    padding: 80px 0;
  }

  @media (max-width: $sm) {
    padding: 50px 0;
  }
}
</style>
