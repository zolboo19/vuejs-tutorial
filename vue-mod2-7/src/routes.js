// import User from "./components/Users/User.vue";
// import UserStart from "./components/Users/UserStart.vue";
// import UserDetail from "./components/Users/UserDetail.vue";
// import UserEdit from "./components/Users/UserEdit.vue";
import Home from "./components/Home.vue";
import Header from "./components/Header.vue";
const User = resolve => {
  require.ensure(["./components/Users/User.vue"], () => {
    resolve(require("./components/Users/User.vue"));
  });
};
const UserStart = resolve => {
  require.ensure(["./components/Users/UserStart.vue"], () => {
    resolve(require("./components/Users/UserStart.vue"));
  });
};
const UserDetail = resolve => {
  require.ensure(["./components/Users/UserDetail.vue"], () => {
    resolve(require("./components/Users/UserDetail.vue"));
  });
};
const UserEdit = resolve => {
  require.ensure(["./components/Users/UserEdit.vue"], () => {
    resolve(require("./components/Users/UserEdit.vue"));
  });
};
export const routes = [
  {
    path: "",
    name: "home",
    components: {
      default: Home,
      "header-top": Header
    }
  },
  {
    path: "/user",
    components: {
      default: User,
      "header-bottom": Header
    },
    children: [
      { path: "", component: UserStart },
      { path: ":id", component: UserDetail },
      { path: ":id/edit", component: UserEdit, name: "userEdit" }
    ]
  },
  {
    path: "/redirect-me",
    redirect: { name: "userEdit" }
  },
  {
    path: "*",
    redirect: "/"
  }
];
