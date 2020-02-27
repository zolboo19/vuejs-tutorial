<template>
  <div id="dashboard">
    <h1>Хянах самбар</h1>
    <p>Зөвхөн нэвтэрсэн хэрэглэгчид хандах эрхтэй!</p>

    <p>{{ users[2] }}</p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      users: {}
    };
  },
  created() {
    axios
      .get("/users.json")
      .then(res => {
        console.log(res);
        const data = res.data;
        const users = [];
        for (let key in data) {
          const user = data[key];
          user.id = key;
          users.push(user);
        }
        console.log(users);
        this.users = users;
      })
      .catch(errors => console.log(errors));
  }
};
</script>

<style scoped>
h1,
p {
  text-align: center;
}

p {
  color: red;
}
</style>
