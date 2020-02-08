<template>
  <div>
    <h1>UserDetail</h1>
    <p>Хэрэглэгчийн ID: {{ $route.params.id }}</p>
    <router-link
      tag="button"
      :to="{name: 'userEdit', params: {id: $route.params.id}, query: {locale: 'mn', z: 30}}"
      class="btn btn-primary"
    >Хэрэглэгчийн мэдээллийг засах</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
