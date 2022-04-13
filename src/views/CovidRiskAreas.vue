<template>
  <section class="bg">
    <section class="content">
      <article class="th">全国风险地区汇总</article>
      <template v-if="high.length > 0">
        <section class="title">
          <img src="../assets/images/high.png" alt="high risk warning" />
          高风险地区{{ high.length }}个
          <span class="time">
            截至北京时间 {{ formatDate(covData.modifyTime) }}
          </span>
        </section>
        <ul class="list">
          <li v-for="(item, index) in high" :key="index">
            {{ item }}
          </li>
        </ul>
      </template>
      <template v-if="mid.length > 0">
        <section class="title">
          <img src="../assets/images/mid.png" alt="mid risk warning" />
          中风险地区{{ mid.length }}个
        </section>
        <ul class="list">
          <li v-for="(item, index) in mid" :key="index">{{ item }}</li>
        </ul>
      </template>
    </section>
  </section>
</template>

<script>
import api from "@/api/index";

export default {
  name: "CovidRiskAreas",
  data() {
    return {
      high: [],
      mid: [],
      covData: {},
    };
  },
  methods: {
    formatDate(num) {
      let date = new Date(num);
      var YY = date.getFullYear() + "-";
      var MM =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      var DD =
        (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + "   ";
      var hh =
        (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
      var mm =
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      return YY + MM + DD + hh + mm;
    },
  },
  created() {
    api
      .getCovInfo({
        key: process.env.VUE_APP_TIANAPI_KEY,
      })
      .then((res) => {
        let data = res.data.newslist[0].desc;
        this.covData = {
          modifyTime: data.modifyTime,
        };
        let riskarea = res.data.newslist[0].riskarea;
        this.high = riskarea.high;
        this.mid = riskarea.mid;
      });
  },
};
</script>

<style lang="less" scoped>
.area {
  background: #f5f5f5;
}

.bg {
  height: 3.6rem;
  background: url("../assets/images/area.png");
  background-size: cover;
  padding-top: 3rem;
}

.content {
  background: #fff;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  padding: 0.2rem;
  border-radius: 0.2rem;
  min-height: 4rem;
  margin-bottom: 0.2rem;
  .th {
    margin-bottom: 0.3rem;
    font-size: 0.34rem;
  }
  .th:before {
    display: inline-block;
    width: 0.1rem;
    height: 0.3rem;
    margin-right: 0.1rem;
    background-color: #4169e2;
    content: "";
    vertical-align: middle;
  }
  .title {
    font-size: 0.3rem;
    margin-bottom: 0.3rem;
    .time {
      float: right;
      font-size: 0.15rem;
      color: #999;
      text-align: right;
    }
    img {
      width: 0.4rem;
      vertical-align: top;
    }
  }
  .list {
    li {
      margin-bottom: 0.2rem;
      color: #333;
      background: #f7f7f7;
      padding: 0.1rem;
      border-radius: 0.1rem;
      letter-spacing: 0.01rem;
      line-height: 0.2rem;
    }
  }
}
</style>