import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import CovidTest from "../views/CovidTest.vue";
import CovidRiskAreas from "../views/CovidRiskAreas.vue";
import CovidPrevention from "../views/CovidPrevention.vue";
import ChinaCities from "../views/Map/ChinaCities.vue";
import TravelAdvisory from "../views/TravelAdvisory.vue";
import SelectCity from "../views/SelectCity.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/covidtest",
    name: "CovidTest",
    component: CovidTest,
  },
  {
    path: "/riskareas",
    name: "RiskAreas",
    component: CovidRiskAreas,
  },
  {
    path: "/prevention",
    name: "Prevention",
    component: CovidPrevention,
  },
  {
    path: "/cities/:cityname",
    name: "ChinaCities",
    component: ChinaCities,
    props: true,
  },
  {
    path: "/travel",
    name: "TravelAdvisory",
    component: TravelAdvisory,
  },
  {
    path: "/selectcity",
    name: "SelectCity",
    component: SelectCity,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
