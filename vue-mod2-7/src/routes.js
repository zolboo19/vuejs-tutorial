import User from "./components/Users/User.vue";
import UserStart from "./components/Users/UserStart.vue";
import UserDetail from "./components/Users/UserDetail.vue";
import UserEdit from "./components/Users/UserEdit.vue";
import Home from "./components/Home.vue";
import Header from "./components/Header.vue";
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
