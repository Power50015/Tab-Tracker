<template>
  <v-app-bar app color="primary" dark fluid>
    <div class="d-flex align-center">
      <router-link to="/"  class="white--text text-decoration-none">Tab Traker</router-link>
    </div>

    <v-spacer></v-spacer>

    <router-link to="login">
      <v-btn text>
        <span class="mr-2">Login</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </router-link>
    <router-link to="register">
      <v-btn text>
        <span class="mr-2">Register</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </router-link>
  </v-app-bar>
</template>
