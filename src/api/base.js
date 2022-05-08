/**
 * 公共的请求接口
 */

const base = {
  host: "https://covid-19-api-server.herokuapp.com",
  baseUrl: "https://yupn.api.storeapi.net",
  covInfo: "/api",
  chinaData: "/api/china",
  worldData: "/api/world",
  cityData: "/api/94/221",
  allData: "/api/94/222?format=json",
  swiperBanner: "/api/image",
  travelUrl: "https://apis.juhe.cn/springTravel",
  travelData: "/citys",
  travelQuery: "/query",
  CityUrl: "https://bang.360.cn",
  getCity: "/aj/getcitycode",
};

export default base;
