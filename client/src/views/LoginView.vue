<template>
  <div class="mt-5">
    <v-container>
      <h1 class="text-center mb-5">Login</h1>
      <v-alert type="error" v-if="error">
        <div v-html="error"></div>
      </v-alert>
      <v-alert type="success" v-if="success">
        <div v-html="success"></div>
      </v-alert>
      <v-row>
        <v-col cols="12">
          <v-text-field v-model="email" label="E-mail" required></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="password"
            type="password"
            label="password"
            required
          ></v-text-field>
        </v-col>
        <v-btn block color="primary" elevation="1" @click="register" x-large
          >Login</v-btn
        >
      </v-row>
    </v-container>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  name: "LoginView",
  data () {
    return {
      email: "test1234@telegram.com",
      password: "123456789",
      error: "",
      success: "",
    };
  },
  methods: {
    async register () {
      this.error = "";
      this.success = "";
      try {
        await AuthenticationService.login({
          email: this.email,
          password: this.password,
        });
        this.success = "User Has login";
      } catch (e) {
        this.error = e.response.data.error;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
