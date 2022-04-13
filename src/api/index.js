/**
 * 请求接口的方法
 */

import axios from "axios";
import base from "./base";

import md5 from "md5-js";

const api = {
  getCovInfo(params) {
    return axios.get(base.host + base.covInfo, {
      params,
    });
  },
  getChinaData(params, params1) {
    return axios.get(base.baseUrl + base.chinaData, {
      params,
      params1,
    });
  },
  getWorldData(params, params1) {
    return axios.get(base.baseUrl + base.worldData, {
      params,
      params1,
    });
  },
  getCityData(city_name) {
    let rules = md5(
      "appid6938city_name" +
        city_name +
        "formatjson709b25c001c8d3325061a5baf7bb7615"
    );
    let canshu =
      "format=json&appid=6938&city_name=" + city_name + "&sign=" + rules;
    return axios.get(base.baseUrl + base.cityData + "?" + canshu);
  },
  getAllData(params, params1) {
    return axios.get(base.baseUrl + base.allData, {
      params,
      params1,
    });
  },
  getSwiperBanner() {
    return axios.get(base.swiperBanner);
  },
  getTravel(params) {
    return axios.get(base.travelUrl + base.travelData, {
      params,
    });
  },
  getTravelData(param, params) {
    return axios.get(base.travelUrl + base.travelQuery, {
      param,
      params,
    });
  },
  getCity() {
    return axios.get(base.CityUrl + base.getCity);
  },
};

export default api;
