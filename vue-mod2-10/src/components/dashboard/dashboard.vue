<template>
  <div id="dashboard">
    <h1>Хянах самбар</h1>
    <p>Зөвхөн нэвтэрсэн хэрэглэгчид хандах эрхтэй!</p>

    <p v-if="email">{{ email }}</p>
  </div>
</template>
<script>
//import axios from "axios";
export default {
  data() {
    return {};
  },
  computed: {
    email() {
      return !this.$store.getters.user ? false : this.$store.getters.user.email;
    }
  },
  created() {
    this.$store.dispatch("fetchUsers");
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
