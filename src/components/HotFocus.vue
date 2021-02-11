<template>
  <section class="focus-items">
    <div class="inner">
      <h3>시선집중</h3>
      <div class="swiper-outer">
        <div
          ref="swiper"
          class="swiper-container">
          <div class="swiper-wrapper">
            <div
              v-for="item in focusItems"
              :key="item.name"
              class="swiper-slide">
              <focus-card :item="item"></focus-card>
              <!--                          <img-->
              <!--                            :src="item.thumbnail"-->
              <!--                            :alt="item.name"-->
              <!--                            width="396px"-->
              <!--                            height="370px" />-->
            </div>
          </div>
        </div>
        <div class="prev"></div>
        <div class="next"></div>
      </div>
    </div>
  </section>
<!--  <div>-->
<!--    <div class="focus-items">-->
<!--      <div class="inner">-->
<!--        <h3>시선집중</h3>-->
<!--        <div class="swiper-container">-->
<!--          <div class="swiper-wrapper">-->
<!--            <div-->
<!--              v-for="item in focusItems"-->
<!--              :key="item.name"-->
<!--              class="swiper-slide">-->
<!--              <img-->
<!--                :src="item.thumbnail"-->
<!--                :alt="item.name"-->
<!--                width="396px"-->
<!--                height="370" />-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="prev"></div>-->
<!--        <div class="next"></div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
// 경로 별칭을 사용하는 것이 더 좋아요~
import FocusCard from "./FocusCard";

export default {
  components: {
    FocusCard,
  },
  data() {
    return {
      // 나중에 다르게 이해할 수 있기 때문에,
      // 데이터의 기본값을 명확하게 표시해주는 것이 좋아요~
      focusItems: [],
    }
  },
  mounted () {
   this.init();
  },
  methods: {
    async init() {
      this.focusItems = await this.$fetch({
        requestName: 'hotFocus'
      });

      const swiper = this.$nextTick(() => {
        new Swiper(this.$refs.swiper, {
          speed: 1000,
          loop: true,
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 29,
          navigation: {
            nextEl: '.focus-items .next',
            prevEl: '.focus-items .prev',
          }
        })
      })
    }
  }
}
</script>

<style scoped lang="scss">
  // 강사님 코드
  section {
    background-color: #f6f7fb;
    .inner {
      height: 528px;
      .swiper-container {
        margin: -30px -16px;
        padding: 30px 16px;
      }
      .swiper-outer {
        position: relative;
        // 다중 선택자는 줄바꿈하는 것이 좋아요~
        .next, .prev {
          position: absolute;
          top: 50%;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: #fff;
          box-shadow: 0 4px 16px rgba(#000, .15);
          z-index: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          outline: none;
          cursor: pointer;
          &::after {
            content: "";
            width: 10px;
            height: 18px;
            background-image: url("https://trusting-williams-8cacfb.netlify.app/images/main_2x.png");
            background-size: 209px;
          }
        }
        .next {
          right: -25px;
          &::after {
            background-position: -199px -46px;
          }
        }
        .prev {
          left: -25px;
          &::after {
            background-position: -199px 0;
          }
        }
      }
    }
  }

  // 혹시 section 태그를 사용하지 않아서??
  // 윽... 왜 안되는거지.. ㅠ
  //.focus-items {
  //  background-color: #F6F7FB;
  //  h3 {
  //    font-weight: 700;
  //    font-size: 25px;
  //    margin-bottom: 20px;ㅠ // 혹시 이 부분 때문?
  //  }
  //  .inner {
  //    height: 528px;
  //    .swiper-container {
  //      margin: -30px -16px;
  //      padding: 30px 16px;
  //    }
  //    position: relative;
  //    .next, .prev {
  //      position: absolute;
  //      width: 50px;
  //      height: 50px;
  //      border-radius:50%;
  //      background-color: #fff;
  //      box-shadow: 0 4px 16px rgba(#000, .15);
  //      z-index: 1;
  //      margin-top: -25px;
  //      cursor: pointer;
  //      display: flex;
  //      justify-content: center;
  //      align-content: center;
  //      &::after {
  //        content: "";
  //        width: 10px;
  //        height: 18px;
  //          background-image: url("https://trusting-williams-8cacfb.netlify.app/images/main_2x.png");
  //          background-size: 209px;
  //      }
  //    }
  //    .next {
  //      right: -25px;
  //      &::after {
  //        background-position: -199px -46px;
  //      }
  //    }
  //
  //    .prev {
  //      left: -25px;
  //      &::after {
  //        background-position: -199px 0;
  //      }
  //    }
  //  }
  //
  //}
</style>
