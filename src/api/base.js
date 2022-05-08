/**
 * 公共的请求接口
 */

const base = {
  host: "https://covid-19-api-server",
  baseUrl: "https://yupn.api.storeapi.net",
  covInfo: "/api",
  chinaData: "/api/94/219?format=json",
  worldData: "/api/94/220?format=json",
  cityData: "/api/94/221",
  allData: "/api/94/222?format=json",
  swiperBanner: "https://iwenwiki.com/wapicovid19/ncovimg.php",
  travelUrl: "https://apis.juhe.cn/springTravel",
  travelData: "/citys",
  travelQuery: "/query",
  CityUrl: "https://bang.360.cn",
  getCity: "/aj/getcitycode",
  proxy: "https://calm-springs-86046.herokuapp.com/",
};

export default base;
