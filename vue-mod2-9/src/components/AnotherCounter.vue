<template>
  <div>
    <button class="btn btn-primary" @click="increment">Another Ихэсгэх</button>
    <button class="btn btn-primary" @click="decrement">Another Багасгах</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["increment", "decrement"])
  }
};
</script>

<style>
</style>
