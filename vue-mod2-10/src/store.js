import Vue from "vue";
import Vuex from "vuex";

import axios from "./auth";
import globalAxios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.token;
      state.userId = userData.userId;
    },
    storeUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    signup({ commit, dispatch }, authData) {
      axios
        .post("/accounts:signUp?key=AIzaSyAfDlpTMnYznjmIaL-UtfptCb-WW8iDnvM", {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .then(res => {
          console.log(res.data);
          commit("authUser", {
            token: res.data.idToken,
            userId: res.data.localId
          });
          dispatch("storeUser", res.data);
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
          dispatch("storeUser", authData);
        })
        .catch(error => console.log(error));
    },
    storeUser({ commit, state }, userData) {
      console.log(userData);
      if (!state.idToken) {
        return;
      }
      globalAxios
        .post("/users.json" + "?auth=" + state.idToken, userData)
        .then(res => console.log(res.data))
        .catch(error => console.log(error));
    },
    fetchUsers({ commit, state }) {
      globalAxios
        .get("/users.json" + "?auth=" + state.idToken)
        .then(res => {
          console.log(res);
          const data = res.data;
          const users = [];
          for (let key in data) {
            const user = data[key];
            user.id = key;
            users.push(user);
          }
          console.log(users[0]);
          commit("storeUser", users[0]);
        })
        .catch(errors => console.log(errors));
    }
  },
  getters: {
    user(state) {
      return state.user;
    }
  }
});
