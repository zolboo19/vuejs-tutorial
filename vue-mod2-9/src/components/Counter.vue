<template>
  <div>
    <h2>Counter</h2>
    <button class="btn btn-primary" @click="increment">Ихэсгэх</button>
    <button class="btn btn-primary" @click="decrement">Багасгах</button>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.state.counter++;
    },
    decrement() {
      this.$store.state.counter--;
    }
  }
};
</script>

<style>
</style>
