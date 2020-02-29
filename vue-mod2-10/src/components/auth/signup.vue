<template>
  <div id="signup">
    <div class="signup-form">
      <form @submit.prevent="onSubmit">
        <div class="input">
          <label for="email">Цахим шуудан</label>
          <input type="email" id="email" v-model="email" />
        </div>
        <div class="input">
          <label for="age">Таны нас</label>
          <input type="number" id="age" v-model.number="age" />
        </div>
        <div class="input">
          <label for="password">Нууц үг</label>
          <input type="password" id="password" v-model="password" />
        </div>
        <div class="input">
          <label for="confirm-password">Нууц үгээ баталгаажуулна уу?</label>
          <input type="password" id="confirm-password" v-model="confirmPassword" />
        </div>
        <div class="input">
          <label for="country">Улс</label>
          <select id="country" v-model="country">
            <option value="mn">Монгол</option>
            <option value="usa">Америк</option>
            <option value="india">Энэтхэг</option>
            <option value="uk">Нэгдсэн вант улс</option>
            <option value="germany">Герман</option>
          </select>
        </div>
        <div class="hobbies">
          <h3>Таны хобби(нэмж болно)</h3>
          <button @click="onAddHobby" type="button">Хобби нэмэх</button>
          <div class="hobby-list">
            <div class="input" v-for="(hobbyInput, index) in hobbyInputs" :key="hobbyInput.id">
              <label :for="hobbyInput.id">Хобби #{{ index }}</label>
              <input type="text" :id="hobbyInput.id" v-model="hobbyInput.value" />
              <button @click="onDeleteHobby(hobbyInput.id)" type="button">X</button>
            </div>
          </div>
        </div>
        <div class="input inline">
          <input type="checkbox" id="terms" v-model="terms" />
          <label for="terms">Хэрэглэх нөхцлийг хүлээн зөвшөөрөх</label>
        </div>
        <div class="submit">
          <button type="submit">Бүртгүүлэх</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "../../auth";
export default {
  data() {
    return {
      email: "",
      age: null,
      password: "",
      confirmPassword: "",
      country: "mn",
      hobbyInputs: [],
      terms: false
    };
  },
  methods: {
    onAddHobby() {
      const newHobby = {
        id: Math.random() * Math.random() * 1000,
        value: ""
      };
      this.hobbyInputs.push(newHobby);
    },
    onDeleteHobby(id) {
      this.hobbyInputs = this.hobbyInputs.filter(hobby => hobby.id !== id);
    },
    onSubmit() {
      const formData = {
        email: this.email,
        age: this.age,
        password: this.password,
        confirmPassword: this.confirmPassword,
        country: this.country,
        hobbies: this.hobbyInputs.map(hobby => hobby.value),
        terms: this.terms
      };
      console.log(formData);
      axios
        .post("/accounts:signUp?key=AIzaSyAfDlpTMnYznjmIaL-UtfptCb-WW8iDnvM", formData)
        .then(res => console.log(res))
        .catch(error => console.log(error));
    }
  }
};
</script>

<style scoped>
.signup-form {
  width: 400px;
  margin: 30px auto;
  border: 1px solid #eee;
  padding: 20px;
  box-shadow: 0 2px 3px #ccc;
}

.input {
  margin: 10px auto;
}

.input label {
  display: block;
  color: #4e4e4e;
  margin-bottom: 6px;
}

.input.inline label {
  display: inline;
}

.input input {
  font: inherit;
  width: 100%;
  padding: 6px 12px;
  box-sizing: border-box;
  border: 1px solid #ccc;
}

.input.inline input {
  width: auto;
}

.input input:focus {
  outline: none;
  border: 1px solid #521751;
  background-color: #eee;
}

.input select {
  border: 1px solid #ccc;
  font: inherit;
}

.hobbies button {
  border: 1px solid #521751;
  background: #521751;
  color: white;
  padding: 6px;
  font: inherit;
  cursor: pointer;
}

.hobbies button:hover,
.hobbies button:active {
  background-color: #8d4288;
}

.hobbies input {
  width: 90%;
}

.submit button {
  border: 1px solid #521751;
  color: #521751;
  padding: 10px 20px;
  font: inherit;
  cursor: pointer;
}

.submit button:hover,
.submit button:active {
  background-color: #521751;
  color: white;
}

.submit button[disabled],
.submit button[disabled]:hover,
.submit button[disabled]:active {
  border: 1px solid #ccc;
  background-color: transparent;
  color: #ccc;
  cursor: not-allowed;
}
</style>
