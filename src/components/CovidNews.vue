<template>
  <section class="hot">
    <article class="title">
      <img src="../assets/images/hot.png" alt="hot image" class="icon" />
      <a href="#">查看更多</a>
    </article>
    <ul class="list">
      <li v-for="item in covNews" :key="item.id">
        <span>最新</span>{{ item.title }}
        <img src="../assets/images/right.png" alt="" />
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "CovidNews",
  props: {
    covNews: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
};
</script>

<style lang="less" scoped>
.hot {
  padding: 0.2rem;
  border-bottom: 1px solid #eee;
  .icon {
    width: 1.2rem;
    vertical-align: top;
  }
  .title {
    border-left: 0.04rem solid #002fa7;
    padding-left: 0.1rem;
    a {
      float: right;
      font-weight: normal;
      color: #002fa7;
      font-size: 0.26rem;
      img {
        width: 0.26rem;
      }
    }
  }

  img {
    width: 0.75rem;
    .icon {
      width: 1.2rem;
      vertical-align: top;
    }
  }

  .list {
    li {
      line-height: 0.44rem;
      margin-bottom: 0.2rem;
      letter-spacing: 0.03rem;
      font-size: 0.3rem;
      color: #666;
    }
    span {
      background: #ff5555;
      color: #fff;
      font-size: 0.26rem;
      padding: 0.02rem 0.06rem;
      border-radius: 0.06rem;
    }
    img {
      float: right;
      width: 0.24rem;
      padding-right: 0.2rem;
    }
  }
}
</style>