<template>
  <section class="num">
    <article class="content">
      <article class="title">
        截至{{ formatDate(covData.modifyTime) }}全国数据统计
      </article>
      <ul class="wrap">
        <li>
          <span>
            较昨日
            <em style="color: rgb(247, 76, 49)">
              {{ number(covData.currentConfirmedIncr) }}
            </em>
          </span>
          <section class="bold">
            {{ division(covData.currentConfirmedCount) }}
          </section>
          <strong>现存确诊</strong>
        </li>
        <li>
          <span>
            较昨日
            <em style="color: rgb(247, 76, 49)">
              {{ number(covData.confirmedIncr) }}
            </em>
          </span>
          <section class="bold">{{ division(covData.suspectedCount) }}</section>
          <strong>境外输入</strong>
        </li>
        <li>
          <span
            >较昨日
            <em style="color: rgb(162, 90, 78)">
              {{ number(covData.suspectedIncr) }}
            </em>
          </span>
          <section class="bold">{{ division(covData.seriousCount) }}</section>
          <strong>现存无症状</strong>
        </li>
        <li>
          <span
            >较昨日
            <em style="color: rgb(174, 33, 44)">
              {{ number(covData.confirmedIncr) }}
            </em>
          </span>
          <section class="bold">{{ division(covData.confirmedCount) }}</section>
          <strong>累计确诊</strong>
        </li>
        <li>
          <span
            >较昨日
            <em style="color: rgb(93, 112, 146)">
              {{ number(covData.deadIncr) }}
            </em>
          </span>
          <section class="bold">{{ division(covData.deadCount) }}</section>
          <strong>累计死亡</strong>
        </li>
        <li>
          <span
            >较昨日
            <em style="color: rgb(40, 183, 163)">
              {{ number(covData.curedIncr) }}
            </em>
          </span>
          <section class="bold">{{ division(covData.curedCount) }}</section>
          <strong>累计治愈</strong>
        </li>
      </ul>
    </article>
  </section>
</template>

<script>
export default {
  name: "CovidData",
  props: ["covData"],
  methods: {
    number(val) {
      val = val > 0 ? "+" + val : val;
      if (val == 0) {
        return "";
      }
      return val;
    },
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
    division(num) {
      if (num == undefined) return "";
      return num.toLocaleString();
    },
  },
};
</script>
<style lang="less" scoped>
.num {
  background: #f5f5f5;
  padding-top: 0.3rem;
  .content {
    background: #fff;
    padding: 0.3rem;
    min-height: 2rem;
    border-radius: 0.2rem 0.2rem 0 0;
    .title {
      color: #666;
      margin-bottom: 0.2rem;
    }
  }
  .wrap {
    display: flex;
    flex-wrap: wrap;
    padding-top: 0.2rem;
    border-radius: 0.1rem;
    box-shadow: 0 0 3px 2px rgba(194, 192, 192, 0.2);
    li {
      width: 33.33%;
      text-align: center;
      margin-bottom: 0.24rem;
      position: "relative";
      color: #666;
      .number {
        span {
          color: #777;
          font-weight: bold;
        }
      }
      strong {
        color: #333;
      }
    }
    .bold {
      font-weight: bold;
    }
    li::after {
      content: "";
      display: block;
      position: absolute;
      right: 1px;
      top: 0.2rem;
      height: 0.8rem;
      border-right: 1px solid #eee;
    }
    li:nth-child(3n)::after {
      content: "";
      border-right: 0;
    }
    .bold {
      font-size: 0.2rem;
    }
    li:nth-child(1) .bold {
      color: rgb(247, 76, 49);
    }
    li:nth-child(2) .bold {
      color: rgb(247, 131, 8);
    }
    li:nth-child(3) .bold {
      color: rgb(162, 90, 78);
    }
    li:nth-child(4) .bold {
      color: rgb(174, 33, 44);
    }
    li:nth-child(5) .bold {
      color: rgb(93, 112, 146);
    }
    li:nth-child(6) .bold {
      color: rgb(40, 183, 163);
    }
  }
}
</style>