<template>
  <div class="page-home">
    <header class="page-home-header">
      <container>
        <a-row type="flex" align="middle" :gutter="{ md: 20 }">
          <a-col
            :xl="{ offset: 2, span: 14 }"
            :lg="{ span: 18 }"
            :md="{ span: 15 }"
          >
            <span class="title-top">с 2003 года</span>
            <h1 class="title-h1">Производим качественные изделия из ПВХ</h1>
          </a-col>

          <a-col :lg="{ span: 6 }" :md="{ span: 9 }">
            <p class="text-xxl my-0">
              Специалисты Аврорапласт постоянно работают над обновлением и
              расширением ассортимента, повышением качества производимых изделий
            </p>
          </a-col>
        </a-row>
      </container>

      <div class="video-line">
        <div class="video-line-inner">
          <a href="/" class="video-line-button">
            Смотреть
            <svg-icon name="Play" />Видео
          </a>
        </div>
      </div>
    </header>

    <section class="product-type-animation-wrapper overflow-hidden">
      <container>
        <a-row type="flex" align="bottom" :gutter="20">
          <a-col span="24">
            <round-animation class="product-type-animation">
              <round-animation-circle>
                <round-animation-item>
                  <img
                    slot="icon"
                    src="@/static/images/Medal.svg"
                    alt="Medal"
                  />
                  <template slot="text">
                    Мы подходим к каждому клиенту индивидуально
                  </template>
                </round-animation-item>
                <round-animation-circle>
                  <round-animation-circle>
                    <round-animation-inner>
                      <img
                        src="@/static/images/contentImage/Windowsill.png"
                        alt="Windowsill"
                      />
                    </round-animation-inner>
                  </round-animation-circle>
                </round-animation-circle>
              </round-animation-circle>
            </round-animation>
          </a-col>
        </a-row>
      </container>

      <div class="product-type-swiper">
        <div v-swiper:mySwiper="productSwiperOption">
          <div class="swiper-pagination swiper-pagination-bullets"></div>
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <product-card-base></product-card-base>
            </div>
            <div class="swiper-slide">
              <product-card-base></product-card-base>
            </div>
            <div class="swiper-slide">
              <product-card-base></product-card-base>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Container from '~/components/Container.vue';
import RoundAnimation from '~/components/roundAnimation/RoundAnimation.vue';
import roundAnimationCircle from '~/components/roundAnimation/roundAnimationCircle.vue';
import RoundAnimationInner from '~/components/roundAnimation/RoundAnimationInner.vue';
import RoundAnimationItem from '~/components/roundAnimation/RoundAnimationItem.vue';
import ProductCardBase from '~/components/ProductCard/ProductCardBase.vue';

export default {
  components: {
    Container,
    RoundAnimation,
    roundAnimationCircle,
    RoundAnimationInner,
    RoundAnimationItem,
    ProductCardBase
  },

  data() {
    return {
      productSwiperOption: {
        slidesPerView: 1.5,
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          768: {
            slidesPerView: 'auto'
          }
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
// VIDEO LINE
.video-line {
  width: 100%;
  height: 1px;
  margin-top: 25px;
  background-color: #a1a8c2;

  @media (max-width: $xl) {
    margin-top: 35px;
  }
}

.video-line-inner {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  padding: 0 10px;
}

.video-line-button {
  position: absolute;
  top: 50%;
  right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  font-weight: 600;
  text-align: center;
  color: #000000;
  background-color: transparent;
  border: 0;
  transform: translateY(-50%);

  @media (max-width: $md) {
    font-size: 12px;
  }

  &:hover {
    color: $color-primary;

    svg {
      fill: $color-primary;
    }
  }

  svg {
    width: 16.5px;
    height: 21px;
    margin: 10px 0;

    @media (max-width: $md) {
      width: 14.5px;
      height: 19px;
      margin: 5px 0;
    }
  }
}

// PRODUCT TYPE
.product-type-animation-wrapper {
  position: relative;
  z-index: 0;
  margin-top: -150px;

  @media (max-width: $osx) {
    margin-top: -80px;
  }

  @media (max-width: $xl) {
    margin-top: 35px;
  }
}

.product-type-animation {
  width: 790px;
  height: 790px;

  @media (max-width: $osx) {
    width: 600px;
    height: 600px;
  }

  @media (max-width: $xl) {
    width: 450px;
    height: 450px;
  }

  @media (max-width: $lg) {
    width: 270px;
    height: 270px;
  }

  @media (max-width: $md) {
    display: none;
  }

  .round-animation-circle {
    padding: 60px;

    @media (max-width: $xl) {
      padding: 45px;
    }

    @media (max-width: $lg) {
      padding: 20px;
    }
  }

  .round-animation-inner {
    background-color: $color-white;
  }
}

.product-type-swiper {
  position: absolute;
  right: 0;
  bottom: 140px;
  width: 500px;
  padding: 30px 20px;
  overflow: hidden;
  box-sizing: border-box;

  @media (max-width: $osx) {
    bottom: 80px;
  }

  @media (max-width: $xl) {
    width: 400px;
    bottom: 20px;
  }

  @media (max-width: $md) {
    position: static;
    width: auto;
  }

  .swiper-container {
    overflow: visible;
  }

  .swiper-slide {
    @media (max-width: $md) {
      width: 325px;
    }

    @media (max-width: $sm) {
      width: 250px;
    }
  }

  .swiper-pagination.swiper-pagination-bullets {
    top: -26px;
    bottom: auto;
    left: 0;
    width: auto;
    transform: none;
  }
}

// RESPONSIVE PAGE
.page-home-header {
  position: relative;
  z-index: 1;

  .title-h1 {
    @media (max-width: $sm) {
      margin-bottom: 20px;
    }
  }
}
</style>
