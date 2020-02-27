import Vue from "vue";
import App from "./App.vue";
import axios from "axios";

import router from "./router";
import store from "./store";

axios.defaults.baseURL = "https://vue-axios-5ca69.firebaseio.com";
axios.defaults.headers.common["Authorization"] = "adsfadsfasg";
axios.defaults.headers.get["Content-Type"] = "application/json";

const reqInterceptors = axios.interceptors.request.use(config => {
  console.log("Request interceptors ", config);
  //config.headers.common.Authorization = "Helo";
  return config;
});

const resInterceptors = axios.interceptors.response.use(res => {
  console.log("Response interceptors ", res);
  return res;
});

axios.interceptors.request.eject(reqInterceptors);
axios.interceptors.response.eject(resInterceptors);

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
