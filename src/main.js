import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/common.css";
import "./plugins/vant";
import myCharts from "./plugins/echarts";
Vue.use(myCharts);
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.css";
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
