<template>
  <section class="list">
    <section>
      <router-link :to="{ name: 'RiskAreas' }">
        <img src="../assets/images/1.png" alt="" />
        <section>风险地区</section>
      </router-link>
    </section>
    <section>
      <router-link :to="{ name: 'CovidTest' }">
        <img src="../assets/images/2.png" alt="" />
        <section>核酸检测</section>
      </router-link>
    </section>
    <section>
      <router-link :to="{ name: 'Prevention' }">
        <img src="../assets/images/3.png" alt="" />
        <section>核酸物资</section>
      </router-link>
    </section>
    <section>
      <router-link :to="{ name: 'TravelAdvisory' }">
        <img src="../assets/images/4.png" alt="" />
        <section>出行政策</section>
      </router-link>
    </section>
  </section>
</template>

<script>
export default {
  name: "CovidNav",
};
</script>

<style lang="less" scoped>
.list {
  display: flex;
  padding-bottom: 0.2rem;
  > section {
    flex: 1;
    text-align: center;
    color: #666;
    img {
      width: 0.8rem;
      height: 0.8rem;
    }
  }
}
</style>