import Vue from "vue";
import App from "./App.vue";
import axios from "axios";

import router from "./router";
import store from "./store";

axios.defaults.baseURL = "https://vue-axios-5ca69.firebaseio.com";
axios.defaults.headers.common["Authorization"] = "adsfadsfasg";
axios.defaults.headers.get["Content-Type"] = "application/json";

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
