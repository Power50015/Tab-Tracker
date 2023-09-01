<template>
  <div>
    <h1>Register</h1>
    <input type="email" v-model="email" />
    <input type="password" v-model="password" />
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  name: "RegisterView",
  data () {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async register  () {
      const res = await AuthenticationService.register({
        email: this.email,
        password: this.password,
      });
      console.log(res.data.message);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
