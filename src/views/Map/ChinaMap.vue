<template>
  <section class="info">
    <section class="title">国内疫情地图</section>
    <van-tabs v-model="active" animated @change="change">
      <van-tab title="现存确诊">
        <section id="nowMain" style="width: 7.5rem; height: 7rem"></section>
      </van-tab>
      <van-tab title="累计确诊">
        <section id="main" style="width: 7.5rem; height: 7rem"></section>
      </van-tab>
    </van-tabs>
  </section>
</template>

<script>
import api from "@/api/index";

export default {
  name: "ChinaMap",
  data() {
    return {
      active: 0,
      arr: [],
    };
  },
  mounted() {
    api
      .getChinaData({
        appid: process.env.VUE_APP_WADATA_APPID,
        sign: process.env.VUE_APP_WADATA_SIGN,
      })
      .then((res) => {
        let cities = res.data.retdata;
        if (!cities) {
          this.$myChart.chinaMap("nowMain", []);
          return;
        }
        let arr = [];
        let nowArr = [];
        for (let i = 0; i < cities.length; i++) {
          let obj = {};
          obj.name = cities[i].xArea;
          obj.value = cities[i].confirm;
          let now = {};
          now.name = cities[i].xArea;
          now.value = cities[i].curConfirm;
          arr.push(obj);
          nowArr.push(now);
        }
        this.arr = arr;
        this.$nextTick(() => {
          this.$myChart.chinaMap("nowMain", nowArr);
        });
      });
  },
  methods: {
    change(title) {
      if (title == 1) {
        this.$nextTick(() => {
          this.$myChart.chinaMap("main", this.arr);
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.title {
  margin: 0.2rem;
  padding-top: 0.2rem;
  border-top: 1px solid #eee;
}
.title::before {
  content: "";
  border-left: 0.04rem solid #002fa7;
  padding-left: 0.1rem;
  margin-bottom: 0.2rem;
  font-size: 0.25rem;
}
#main,
#nowMain {
  background: #f5f5f5;
  margin: 0 auto;
}
</style>