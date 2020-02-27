<template>
  <div id="welcome">
    <h1>Шинэ зүйл сурах цаг боллоо!</h1>
    <p>Таны суралцах хамгийн тохиромжтой газар энд байна - Та ганц л удаа нэвтэр(Бүртгүүл)!</p>
    <div class="cta">
      <router-link to="/signup">Бүртгүүлэх</router-link>
      <router-link to="/signin">Нэвтрэх</router-link>
    </div>
  </div>
</template>

<style scoped>
#welcome {
  width: 80%;
  margin: auto;
}

h1 {
  text-align: center;
}

p {
  text-align: center;
}

.cta {
  width: 300px;
  margin: auto;
  text-align: center;
}

.cta a {
  margin: 10px;
  text-decoration: none;
  display: inline-block;
  border: 1px solid #521751;
  border-radius: 3px;
  width: 100px;
  padding: 10px;
  box-sizing: border-box;
  color: #521751;
}

.cta a:hover,
.cta a:active {
  background-color: #521751;
  color: white;
}
</style>
