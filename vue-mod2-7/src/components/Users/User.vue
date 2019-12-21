<template>
  <div>
    <h1>User</h1>
    <button @click="goToHome">Нүүр хуудасруу шилжих</button>
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
