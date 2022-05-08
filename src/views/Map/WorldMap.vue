<template>
  <section>
    <section class="title">世界疫情地图</section>
    <section id="main" style="width: 7.5rem; height: 7rem"></section>
  </section>
</template>

<script>
import api from "../../api/index";

export default {
  name: "WorldMap",
  mounted() {
    api.getWorldData().then((res) => {
      let worlds = res.data[0].retdata;
      if (!worlds) {
        this.$myChart.worldMap("main", []);
        return;
      }
      let arr = [];
      for (let i = 0; i < worlds.length; i++) {
        let obj = {};
        obj.name = worlds[i].xArea;
        obj.value = worlds[i].confirm;
        arr.push(obj);
      }
      this.$myChart.worldMap("main", arr);
    });
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
#main {
  background: #f5f5f5;
  margin: 0 auto;
}
</style>