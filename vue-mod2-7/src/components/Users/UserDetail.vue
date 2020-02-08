<template>
  <div>
    <h1>UserDetail</h1>
    <p>Хэрэглэгчийн ID: {{ $route.params.id }}</p>
    <router-link tag="button" :to="link" class="btn btn-primary">Хэрэглэгчийн мэдээллийг засах</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      link: {
        name: "userEdit",
        params: {
          id: this.$route.params.id
        },
        query: {
          locale: "mn",
          z: 30
        },
        hash: "#data"
      }
    };
  }
};
</script>

<style>
</style>
