<template>
  <section>
    <h2>{{ cityname }}界面</h2>
    <section id="main" style="width: 7rem; height: 7.5rem"></section>
  </section>
</template>

<script>
import api from "../../api/index";

export default {
  name: "ChinaCities",
  props: ["cityname"],
  mounted() {
    api.getCityData(this.cityname).then((res) => {
      let arr = res.data.retdata.subList;
      let newArr = [];
      arr.forEach((ele) => {
        let obj = {};
        if (
          ele.city.endsWith("区") ||
          ele.city.endsWith("州") ||
          ele.city.endsWith("盟") ||
          ele.city.endsWith("旗")
        ) {
          obj.name = ele.city;
        } else {
          obj.name = ele.city + "市";
        }
        obj.value = ele.confirm;
        newArr.push(obj);
      });
      this.$myChart.cityMap("main", this.cityname, newArr);
    });
  },
};
</script>

<style>
</style>