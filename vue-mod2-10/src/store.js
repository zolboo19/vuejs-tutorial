import Vue from "vue";
import Vuex from "vuex";

import axios from "../src/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.token;
      state.userId = userData.userId;
    }
  },
  actions: {
    signup({ commit }, authData) {
      axios
        .post("/accounts:signUp?key=AIzaSyAfDlpTMnYznjmIaL-UtfptCb-WW8iDnvM", {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .then(res => {
          console.log(res);
          commit("authUser", {
            token: res.data.idToken,
            userId: res.data.localId
          });
        })
        .catch(error => console.log(error));
    },
    signin({ commit }, authData) {
      axios
        .post(
          "/accounts:signInWithPassword?key=AIzaSyAfDlpTMnYznjmIaL-UtfptCb-WW8iDnvM",
          {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          }
        )
        .then(res => {
          console.log(res);
          commit("authUser", {
            token: res.data.idToken,
            userId: res.data.localId
          });
        })
        .catch(error => console.log(error));
    }
  },
  getters: {}
});
