<template>
  <div>
    <h1>Хэрэглэгчийн мэдээллийг засах</h1>
    <p>Хэрэглэгчийн ID: {{ $route.params.id }}</p>
    <p>Locale: {{ $route.query.locale }}</p>
    <p>Тоо утга: {{ $route.query.z }}</p>
    <div style="height: 900px"></div>
    <p id="data">Энд зарим зүйлсийг бичнэ.</p>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
