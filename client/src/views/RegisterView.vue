<template>
  <div class="mt-5">
    <v-container>
      <h1 class="text-center mb-5">Register</h1>
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
          >Register</v-btn
        >
      </v-row>
    </v-container>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  name: "RegisterView",
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
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password,
        });
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
        this.success = "User Has Created";
        this.$router
          .push({
            name: "home",
          })
          .catch(() => {});
      } catch (e) {
        this.error = e.response.data.error;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
