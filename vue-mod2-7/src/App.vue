<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Routing</h1>
        <router-view name="header-top"></router-view>
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
        <!-- <router-view name="header-bottom"></router-view> -->
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    AppHeader: Header
  }
};
</script>

<style lang="scss">
.slide-leave-active {
  transition: opacity 1s ease;
  opacity: 0;
  animation: slide-out 1s ease-out forwards;
}

.slide-leave {
  opacity: 1;
  transform: translateX(0);
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
}
@keyframes slide-out {
  0% {
    transform: translateY(-30px);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes slide-in {
  100% {
    transform: translateY(-30px);
  }
  0% {
    transform: translateY(0px);
  }
}
</style>
