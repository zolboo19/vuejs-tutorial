import axios from "axios";
// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: "https://vue-axios-5ca69.firebaseio.com"
});

// Alter defaults after instance has been created
instance.defaults.headers.common["COMEDATA"] = "SOME_DATA";

export default instance;
