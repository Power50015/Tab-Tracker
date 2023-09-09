<template>
  <v-layout column>
    <router-link to="/songs/create" v-if="$store.state.isUserLoggedIn">
      <v-btn text class="my-4 py-4">
        <v-icon>add song</v-icon>
      </v-btn>
    </router-link>
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <div v-for="song in songs" class="song" :key="song.id">
          <div class="mx-auto my-6 mx-3 px-4">
            <v-card class="mx-auto" max-width="374" cols="6">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img height="250" :src="song.albumImageUrl"></v-img>

            <v-card-title>{{ song.title }}</v-card-title>

            <v-card-text>
              {{ song.artist }}
            </v-card-text>
            <v-card-text>{{ song.genre }}</v-card-text>
            <v-divider class="mx-4"></v-divider>
            <v-btn
              dark
              class="cyan my-3"
              block
              @click="
                navigateTo({
                  name: 'song',
                  params: {
                    songId: song.id,
                  },
                })
              "
            >
              View
            </v-btn>
          </v-card>
          </div>
        </div>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
import SongsService from "@/services/SongsService";
export default {
  data () {
    return {
      songs: null,
    };
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route);
    },
  },
  async mounted () {
    this.songs = (await SongsService.index()).data;
  },
};
</script>

<style scoped></style>
