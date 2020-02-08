<template>
  <div>
    <h1>Хэрэглэгчийн мэдээллийг засах</h1>
    <p>Хэрэглэгчийн ID: {{ $route.params.id }}</p>
    <p>Locale: {{ $route.query.locale }}</p>
    <p>Тоо утга: {{ $route.query.z }}</p>
    <hr />
    <button class="btn btn-primary" @click="confirmed = true">Зөвшөөрөх</button>
    <div style="height: 900px"></div>
    <p id="data">Энд зарим зүйлсийг бичнэ.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      confirmed: false
    };
  },
  beforeRouteEnter(to, from, next) {
    if (false) {
      next();
    } else {
      if (confirm("Та итгэлтэй байна уу?")) {
        next();
      } else {
        next(false);
      }
    }
  }
};
</script>

<style>
</style>
