<template>
  <div>
    <h2>Result</h2>
    <p>{{ counter }}</p>
    <h2>Овог нэр</h2>
    <p>{{ $store.getters.fullName }}</p>
    <ul>
      <li v-for="(friend, index) in $store.state.friendsModule.friends" :key="index">
        {{ friend }}
        <button
          class="btn"
          @click.prevent="$store.dispatch('friendsModule/removeFriendAction')"
        >
          <span class="badge badge-primary">X</span>
        </button>
      </li>
    </ul>
    <button @click.prevent="$store.dispatch('friendsModule/addFriendAction')">Найз нэмэх</button>
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
