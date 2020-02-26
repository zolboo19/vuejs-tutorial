export const alertModule = {
  state: {
    message: "",
    color: ""
  },
  getters: {},
  mutations: {
    addAlert(state, alert) {
      state.message = alert.message;
      state.color = alert.color;
    }
  },
  actions: {
    alert(context, alert) {
      context.commit("addAlert", alert);
    }
  }
};
