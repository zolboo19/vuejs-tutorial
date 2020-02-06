<template>
  <div>
    <h1>User</h1>
    <hr />
    <button @click="goToHome" class="btn btn-primary">Нүүр хуудасруу шилжих</button>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    goToHome() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style>
</style>
