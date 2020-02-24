<template>
  <div>
    <h2>Result</h2>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.doubleCounter;
    }
  }
};
</script>

<style>
</style>
