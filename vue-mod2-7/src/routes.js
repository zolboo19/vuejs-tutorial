import User from "./components/Users/User.vue";
import UserStart from "./components/Users/UserStart.vue";
import UserDetail from "./components/Users/UserDetail.vue";
import UserEdit from "./components/Users/UserEdit.vue";
import Home from "./components/Home.vue";
export const routes = [
  { path: "", component: Home },
  {
    path: "/user",
    component: User,
    children: [
      { path: "", component: UserStart },
      { path: ":id", component: UserDetail },
      { path: ":id/edit", component: UserEdit }
    ]
  }
];
