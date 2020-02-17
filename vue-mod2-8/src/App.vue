<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http request</h1>
        <div class="form-group">
          <label>Хэрэглэгчийн нэр</label>
          <input type="text" class="form-control" v-model="user.name" />
        </div>
        <div class="form-group">
          <label>Хэрэглэгчийн цахим шуудан</label>
          <input type="email" class="form-control" v-model="user.email" />
        </div>
        <button class="btn btn-primary" @click="submit()">Илгээх</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      user: {
        name: "",
        email: ""
      }
    };
  },
  methods: {
    submit() {
      console.log(this.user);
    }
  }
};
</script>

<style>
</style>
