import User from "./components/Users/User.vue";
import Home from "./components/Home.vue";
export const routes = [
  { path: "", component: Home },
  { path: "/user", component: User }
];
