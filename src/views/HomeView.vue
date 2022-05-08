<template>
  <div class="home">
    <TheHeader />
    <CovidInfo />
    <CovidNews :covNews="covNews" />
    <CovidNav />
    <CovidData :covData="covData" />
    <ChinaMap />
    <WorldMap />
    <VueSwiper />
  </div>
</template>

<script>
import api from "@/api/index";

// @ is an alias to /src
import TheHeader from "@/components/TheHeader.vue";
import CovidNews from "@/components/CovidNews.vue";
import CovidNav from "@/components/CovidNav.vue";
import CovidData from "@/components/CovidData.vue";

// Import view
import CovidInfo from "@/views/CovidInfo.vue";
import ChinaMap from "@/views/Map/ChinaMap.vue";
import WorldMap from "@/views/Map/WorldMap.vue";
import VueSwiper from "@/views/Swiper/VueSwiper.vue";

export default {
  name: "HomeView",
  components: {
    TheHeader,
    CovidInfo,
    CovidNews,
    CovidNav,
    CovidData,
    ChinaMap,
    WorldMap,
    VueSwiper,
  },
  data() {
    return {
      covNews: [],
      covData: {},
    };
  },
  created() {
    api.getCovInfo().then((res) => {
      let data = res.data[0].newslist[0].desc;
      this.covNews = res.data[0].newslist[0].news;
      this.covData = {
        currentConfirmedCount: data.currentConfirmedCount,
        currentConfirmedIncr: data.currentConfirmedIncr,
        confirmedCount: data.confirmedCount,
        confirmedIncr: data.confirmedIncr,
        suspectedCount: data.suspectedCount,
        suspectedIncr: data.suspectedIncr,
        curedCount: data.curedCount,
        curedIncr: data.curedIncr,
        deadCount: data.deadCount,
        deadIncr: data.deadIncr,
        seriousCount: data.seriousCount,
        seriousIncr: data.seriousIncr,
        modifyTime: data.modifyTime,
      };
    });
  },
};
</script>
