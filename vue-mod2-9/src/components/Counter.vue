<template>
  <div>
    <button class="btn btn-primary" @click="increment">Ихэсгэх</button>
    <button class="btn btn-primary" @click="decrement">Багасгах</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
//import { mapActions } from "vuex";
export default {
  methods: {
    ...mapMutations(["increment", "decrement"])
  }
};
</script>

<style>
</style>
