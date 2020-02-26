import randomName from "node-random-name";
export const friendsModule = {
  namespaced: true,
  state: {
    friends: []
  },
  getters: {},
  mutations: {
    addFriend: (state, friend) => {
      state.friends = [friend, ...state.friends];
    },
    removeFriend: (state, friendIndex) => {
      state.friends.splice(friendIndex, 1);
    }
  },
  actions: {
    addFriendAction(context) {
      context.commit("addFriend", randomName());
      const alert = {
        message: "Шинэ найз нэмлээ",
        color: "green"
      };
      context.dispatch("alert", alert, { root: true });
    },
    removeFriendAction(context, index) {
      context.commit("removeFriend", index);
      const alert = {
        message: "Шинэ найз хаслаа",
        color: "red"
      };
      context.dispatch("alert", alert, { root: true });
    }
  }
};
