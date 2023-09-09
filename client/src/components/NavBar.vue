<template>
  <v-app-bar app color="primary" dark fluid>
    <div class="d-flex align-center">
      <router-link to="/" class="white--text text-decoration-none"
        >Tab Traker</router-link
      >
    </div>

    <v-spacer></v-spacer>

    <router-link to="login" v-if="!$store.state.isUserLoggedIn">
      <v-btn text>
        <span class="mr-2">Login</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </router-link>
    <router-link to="register" v-if="!$store.state.isUserLoggedIn">
      <v-btn text>
        <span class="mr-2">Register</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </router-link>
    <v-btn v-if="$store.state.isUserLoggedIn" dark @click="logout">
      Log Out
    </v-btn>
  </v-app-bar>
</template>
<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router
        .push({
          name: "login",
        })
        .catch(() => {});
    },
  },
};
</script>
