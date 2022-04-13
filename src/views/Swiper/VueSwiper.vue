<template>
  <section>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item in banner" :key="item.title">
        <img :src="item.image" />
      </swiper-slide>
      <section class="swiper-pagination" slot="pagination"></section>
    </swiper>
    <ul class="list">
      <li
        v-for="(item, index) in banner"
        :key="item.title"
        :class="{ active: index == num }"
        @click="changeSwiper(index)"
      >
        {{ item.title }}
      </li>
    </ul>
  </section>
</template>

<script>
import api from "../../api/index";

export default {
  name: "VueSwiper",
  data() {
    let that = this;
    return {
      num: 0,
      arr: [1, 2, 3, 4, 5],
      banner: [],
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        loop: true,
        on: {
          slideChangeTransitionStart: function () {
            if (this.activeIndex == that.arr.length + 1) {
              that.num = 0;
            } else {
              that.num = this.activeIndex - 1;
            }
          },
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    api.getSwiperBanner().then((res) => {
      this.banner = res.data.result;
    });
  },
  methods: {
    changeSwiper(index) {
      this.num = index;
      this.swiper.slideTo(index + 1, 1000, false);
    },
  },
};
</script>

<style lang='less' scoped>
img {
  width: 100%;
}
.list {
  display: flex;
  li {
    flex: 1;
    padding: 0.1rem;
    font-size: 0.24rem;
    line-height: 0.32rem;
    margin: 0.1rem;
    background: #eee;
    color: #666;
    text-align: center;
    display: flex;
    align-items: center;
  }
  .active {
    background: #3343ff;
    color: #fff;
  }
}
</style>