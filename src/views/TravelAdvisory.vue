<template>
  <section>
    <article class="title">疫情期间出行防疫政策</article>
    <van-field
      v-model="fromCity"
      is-link
      readonly
      label="出发城市"
      placeholder="请选择出发城市"
      @click="show = true"
    />
    <van-popup v-model="show" round position="bottom">
      <van-cascader
        v-model="cascaderValue"
        title="请选择出发城市"
        :options="options"
        @close="show = false"
        @finish="onFinish"
      />
    </van-popup>

    <van-field
      v-model="toCity"
      is-link
      readonly
      label="到达城市"
      placeholder="请选择到达城市"
      @click="show2 = true"
    />
    <van-popup v-model="show2" round position="bottom">
      <van-cascader
        v-model="cascaderValue2"
        title="请选择到达城市"
        :options="options"
        @close="show2 = false"
        @finish="toFinish"
      />
    </van-popup>

    <section class="search">
      <van-button type="primary" size="large" @click="search"
        >查询疫情防疫</van-button
      >
    </section>
    <section class="content">
      <article>出发城市：</article>
      <article>到达城市：</article>
    </section>
  </section>
</template>

<script>
import api from "../api/index";
export default {
  name: "TravelAdvisory",
  data() {
    return {
      show: false,
      show2: false,
      fromCity: "",
      toCity: "",
      from: "",
      to: "",
      cascaderValue: "",
      cascaderValue2: "",
      from_info: "",
      to_info: "",
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [
        {
          text: "浙江省",
          value: "330000",
          children: [{ text: "杭州市", value: "330100" }],
        },
        {
          text: "江苏省",
          value: "320000",
          children: [{ text: "南京市", value: "320100" }],
        },
      ],
    };
  },
  methods: {
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish({ value, selectedOptions }) {
      this.from = value;
      this.show = false;
      this.fromCity = selectedOptions.map((option) => option.text).join("/");
    },
    toFinish({ value, selectedOptions }) {
      this.to = value;
      this.show2 = false;
      this.toCity = selectedOptions.map((option) => option.text).join("/");
    },
    search() {
      api
        .getTravelData({
          key: process.env.VUE_APP_JUHE,
          from: this.from,
          to: this.to,
        })
        .then((res) => {
          this.from_info = res.data.from_info;
          this.to_info = res.data.to_info;
        });
    },
  },
  created() {
    api
      .getTravel({
        key: process.env.VUE_APP_JUHE,
      })
      .then((res) => {
        let result = res.data.result;
        let arr = [];
        result.forEach((item) => {
          let obj = {};
          obj.text = item.province;
          obj.value = item.province_id;
          obj.children = [];
          item.citys.forEach((ele) => {
            let child = {};
            child.text = ele.city;
            child.value = ele.city_id;
            obj.children.push(child);
          });
          arr.push(obj);
        });
      });
  },
};
</script>

<style lang="less" scoped>
.title {
  padding: 0.2rem;
}

.search {
  margin: 0.2rem;
}
</style>