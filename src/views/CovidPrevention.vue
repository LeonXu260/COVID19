<template>
  <section class="wuzi">
    <img src="../assets/images/wuzi.png" alt="Covid Supplies" />
    <article class="wrapper">
      <van-tabs v-model="active" animated>
        <van-tab v-for="item in arr" :title="item.title" :key="item.title">
          <img :src="item.img" alt="" />
        </van-tab>
      </van-tabs>
    </article>
  </section>
</template>

<script>
import img1 from "../assets/images/jiujing.png";
import img2 from "../assets/images/kouzhao.png";

export default {
  name: "CovidPrevention",
  data() {
    return {
      active: 1,
      arr: [
        {
          img: img1,
          title: "消毒剂",
        },
        {
          img: img2,
          title: "口罩",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
img {
  width: 100%;
}

.wuzi {
  background: #3343ff;
}

.wrapper {
  background: #3343ff;
  padding: 0.2rem;
}
</style>